import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [users, setUsers] = useState([]);  // Fetch users for selecting user_id
    const [newComplaint, setNewComplaint] = useState({
        complaint_id: '',
        user_id: '',
        complaint_type: '',
        complaint_details: '',
        status: 'Pending'
    });

    // Fetch complaints
    useEffect(() => {
        axios.get('http://localhost:3000/complaints')
            .then(response => setComplaints(response.data))
            .catch(error => console.error("Error fetching complaints:", error));

        axios.get('http://localhost:3000/users') // Fetch users
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    // Create new complaint
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/complaints', newComplaint);
            setComplaints([...complaints, response.data]);
            setNewComplaint({ complaint_id: '', user_id: '', complaint_type: '', complaint_details: '', status: 'Pending' });
        } catch (error) {
            console.error("Error creating complaint:", error);
        }
    };

    return (
        <div>
            <h1>Complaints</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={newComplaint.complaint_id}
                    onChange={(e) => setNewComplaint({ ...newComplaint, complaint_id: e.target.value })}
                    placeholder="Complaint ID"
                    required
                />
                <select
                    value={newComplaint.user_id}
                    onChange={(e) => setNewComplaint({ ...newComplaint, user_id: e.target.value })}
                    required
                >
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.username} ({user.email})</option>
                    ))}
                </select>
                <input
                    type="text"
                    value={newComplaint.complaint_type}
                    onChange={(e) => setNewComplaint({ ...newComplaint, complaint_type: e.target.value })}
                    placeholder="Complaint Type"
                    required
                />
                <textarea
                    value={newComplaint.complaint_details}
                    onChange={(e) => setNewComplaint({ ...newComplaint, complaint_details: e.target.value })}
                    placeholder="Complaint Details"
                    required
                />
                <select
                    value={newComplaint.status}
                    onChange={(e) => setNewComplaint({ ...newComplaint, status: e.target.value })}
                >
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
                <button type="submit">Add Complaint</button>
            </form>

            <h2>Complaint List</h2>
            <ul>
                {complaints.map((complaint) => (
                    <li key={complaint._id} id='text'>
                        <strong>{complaint.complaint_type}</strong> - {complaint.status} <br />
                        Submitted by: {complaint.user_id?.username} ({complaint.user_id?.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Complaints;
