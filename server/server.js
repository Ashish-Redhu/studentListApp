const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');       

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Sample route to confirm server setup
// app.get('/', (req, res) => {
//     res.send('Student List App backend is running');
// });

// Import the routes
const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes); // Use the student routes



