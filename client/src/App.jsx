import React, { useState, useEffect } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL; // Make sure this is correct

  // Fetch students when the app loads
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch students.
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
 
  // Addd a new student.
  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post(`${API_URL}/add`, newStudent); // Add student to backend
      console.log("Added Student", response.data);
      setStudents((prevStudents) => [...prevStudents, response.data]); // Update UI with new student
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  // Delete a student.
  const deleteStudent = async (id) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this student?");
    
    if (isConfirmed) { // If user confirms
      try {
        await axios.delete(`${API_URL}/${id}`); // Send DELETE request
        setStudents(students.filter(student => student._id !== id)); // Remove student from UI
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };
  
  // Update a student's details.
  const updateStudent = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData); // PUT request to update student
      fetchStudents();
      
      // setStudents(students.map(student => student._id === id ? response.data : student)); 
      // Update UI with the edited student
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };
  

  return (
    <div className="App container mt-4">
      <div className="inner mx-auto col-12 col-md-10 col-lg-8">
        <AddStudent addStudent={addStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} updateStudent={updateStudent} />
      </div>
    </div>
  );
}

export default App;
