import React, { useState } from 'react';
import './StudentList.css';

const StudentList = ({ students, deleteStudent }) => {
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* 1.) Heading */}
      <div className="heading">
        <h2 className="title">Student List</h2>
      </div>

      {/* 2.) Searchbar */}
      <div className="searchbar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name or Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 3.) Table */}
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
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <button
                  onClick={() => deleteStudent(student._id)} // Trigger deleteStudent function
                  className="btn btn-danger"
                >
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
