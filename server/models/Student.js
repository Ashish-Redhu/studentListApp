const mongoose = require('mongoose');

// Create the student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // trims spaces around the name
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    lowercase: true,
  },
});

// Create the model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model so it can be used in other files
module.exports = Student;
