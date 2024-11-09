import React, { useState, useEffect } from 'react';
import { getStudents, addStudent, deleteStudent } from './api';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  // Fetch the students when the component is mounted
  useEffect(() => {
    getStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching students!", error);
      });
  }, []);

  // Handle adding a new student
  const handleAddStudent = () => {
    const newStudent = { name, age, email };
    addStudent(newStudent)
      .then((response) => {
        setStudents([...students, response.data]); // Add the new student to the list
        setName('');
        setAge('');
        setEmail('');
      })
      .catch((error) => {
        console.error("There was an error adding the student!", error);
      });
  };

  // Handle deleting a student
  const handleDeleteStudent = (id) => {
    deleteStudent(id)
      .then(() => {
        setStudents(students.filter(student => student._id !== id)); // Remove the student from the list
      })
      .catch((error) => {
        console.error("There was an error deleting the student!", error);
      });
  };

  return (
    <div>
      <h1>Student List</h1>

      {/* Form to add a new student */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Table to display the students */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student._id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleDeleteStudent(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
