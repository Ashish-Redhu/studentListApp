import React, { useState } from 'react';
import "./StudentList.css";
const StudentList = ({ students=[], deleteStudent, updateStudent }) => {
  const [editingStudent, setEditingStudent] = useState(null); // Track which student is being edited
  const [editedData, setEditedData] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [searchQuery, setSearchQuery] = useState(''); // Track search input

  // Handle change in input fields while editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle click on the edit button for a particular student
  const handleEditClick = (student) => {
    setEditingStudent(student._id); // Set this student as the one being edited
    setEditedData({
      name: student.name,
      age: student.age,
      email: student.email
    });
  };

  // Handle submit of the edit form
  const handleEditSubmit = (e, studentId) => {
    e.preventDefault();
    updateStudent(studentId, editedData); // Call the updateStudent function passed from App
    setEditingStudent(null); // After updating, stop editing mode
  };

  // Handle cancel edit action
  const handleCancelEdit = () => {
    setEditingStudent(null); // Simply stop editing mode and reset
  };

  // Filter students based on the search query
  const filteredStudents = Array.isArray(students)
  ? students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  return (
    <div>
      <div className="heading">
        <h2 className="title">Student List</h2>
      </div>

      {/* Search Bar */}
      <div className="searchbar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name or Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              {editingStudent === student._id ? (
                // Edit mode: show form inputs to update student data
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editedData.name}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      value={editedData.age}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedData.email}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleEditSubmit(e, student._id)} // Trigger updateStudent on form submission
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit} // Trigger cancel edit
                      className="btn btn-secondary ml-2"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                // Normal view: show student data and edit/delete buttons
                <>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => handleEditClick(student)}
                      className='edit-btn'>
                      <i className="fas fa-edit"></i> {/* Edit icon */}
                    </button>
                    <button onClick={() => deleteStudent(student._id)}
                      className='delete-btn'>
                      <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
