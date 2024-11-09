import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = { name, age, email };

    try {
      // Send POST request to add the student
      const response = await axios.post(`${API_URL}/add`, newStudent);
      
      // Call addStudent prop to update the list in parent component
      addStudent(response.data); // Directly update the state in App.jsx

      // Clear form fields after adding the student
      setName('');
      setAge('');
      setEmail('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
