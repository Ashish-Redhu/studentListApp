import React, { useState, useEffect } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL; // Make sure this is correct

  // Fetch students when the app loads
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post(`${API_URL}/add`, newStudent); // Add student to backend
      setStudents((prevStudents) => [...prevStudents, response.data]); // Update UI with new student
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Send DELETE request
      setStudents(students.filter(student => student._id !== id)); // Remove student from UI
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="App">
      <AddStudent addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
