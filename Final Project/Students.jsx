// src/components/Students.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Students = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        student_id: '',
        name: '',
        roll_number: '',
        department: '',
        contact_number: ''
    });

    // Fetch students
    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then(response => setStudents(response.data))
            .catch(error => console.log(error));
    }, []);

    // Create new student
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/students', newStudent)
            .then(response => setStudents([...students, response.data]))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Students</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={newStudent.student_id}
                    onChange={(e) => setNewStudent({ ...newStudent, student_id: e.target.value })}
                    placeholder="NameID"
                />
                <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={newStudent.roll_number}
                    onChange={(e) => setNewStudent({ ...newStudent, roll_number: e.target.value })}
                    placeholder="Roll Number"
                />
                <input
                    type="text"
                    value={newStudent.department}
                    onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
                    placeholder="Department"
                />
                <input
                    type="text"
                    value={newStudent.contact_number}
                    onChange={(e) => setNewStudent({ ...newStudent, contact_number: e.target.value })}
                    placeholder="Contact Number"
                />
                <button type="submit">Add Student</button>
            </form>

            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id} id='text'>
                        {student.name} - {student.roll_number} - {student.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Students;
