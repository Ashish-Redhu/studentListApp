import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;; // The backend API URL

// Get all students
export const getStudents = () => {
  return axios.get(API_URL);
};

// Add a new student
export const addStudent = (newStudent) => {
  return axios.post(`${API_URL}/add`, newStudent);
};

// Delete a student by ID
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
