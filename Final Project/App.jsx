import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import Rooms from './components/Rooms';
import Complaints from './components/Complaints';
import Students from './components/Students';
import './App.css'; 
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/complaints">Complaints</Link>
                    <Link to="/students">Students</Link>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </nav>
                
                <Routes>
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<PrivateRoute token={token}><Users /></PrivateRoute>} />
                    <Route path="/rooms" element={<PrivateRoute token={token}><Rooms /></PrivateRoute>} />
                    <Route path="/complaints" element={<PrivateRoute token={token}><Complaints /></PrivateRoute>} />
                    <Route path="/students" element={<PrivateRoute token={token}><Students /></PrivateRoute>} />
                </Routes>
                <button onClick={() => {
                         localStorage.removeItem("token");
                            setToken(null);
                       }}>Logout</button>
            </div>
        </Router>
    );
};

export default App;
