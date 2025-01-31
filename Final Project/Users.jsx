import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        user_id: '',
        username: '',
        email: '',
        contact_number: '',
        role: '',
        password: '' // Add password field
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch users
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/users', {
            headers: {
                Authorization: `Bearer ${token}` // Include the token for authentication
            }
        })
            .then(response => setUsers(response.data))
            .catch(error => {
                console.log(error);
                setError('Failed to fetch users');
            });
    }, []);

    // Create new user
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newUser.password || newUser.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        const token = localStorage.getItem('token');
        axios.post('http://localhost:3000/users', newUser, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token for authentication
            }
        })
            .then(response => {
                setUsers([...users, response.data]);
                setSuccessMessage('User added successfully!');
                setNewUser({
                    user_id: '',
                    username: '',
                    email: '',
                    contact_number: '',
                    role: '',
                    password: '' // Reset password field
                }); // Reset the form
            })
            .catch(error => {
                console.log(error);
                setError('Failed to add user');
            });
    };

    return (
        <div>
            <h1>Users</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={newUser.user_id}
                    onChange={(e) => setNewUser({ ...newUser, user_id: e.target.value })}
                    placeholder="User_id"
                    required
                />
                <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={newUser.contact_number}
                    onChange={(e) => setNewUser({ ...newUser, contact_number: e.target.value })}
                    placeholder="Contact Number"
                    required
                />
                <input
                    type="text"
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    placeholder="Role"
                    required
                />
                <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    placeholder="Password"
                    required
                />
                <button type="submit">Add User</button>
            </form>

            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id} id='text'>
                        {user.username} - {user.email} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
