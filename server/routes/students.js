const express = require('express');
const Student = require('../models/Student'); // Import the student model
const router = express.Router();

// Route to add a new student
router.post('/add', async (req, res) => {
  const { name, age, email } = req.body;

  const newStudent = new Student({
    name,
    age,
    email,
  });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent); // Return the saved student
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(); // Find all students
    res.json(students); // Return students as a response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// Route to delete a student by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;  // Get the student ID from the URL

  try {
    // Find the student by ID and remove it from the database
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' }); // If no student is found with that ID
    }

    res.json({ message: 'Student deleted successfully' }); // Send success message
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// Route to update a student's information by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;  // Get the student ID from the URL
  const { name, age, email } = req.body;  // Get the updated data from the request body

  try {
    // Find the student by ID and update the data
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age, email },  // Update the student data
      { new: true }  // Return the updated student
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });  // Handle case where student is not found
    }

    res.json(updatedStudent);  // Return the updated student
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
});

// Export the router
module.exports = router;
