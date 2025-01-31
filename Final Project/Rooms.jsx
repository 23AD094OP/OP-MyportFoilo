// src/components/Rooms.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({
        room_id: '',
        room_type: '',
        capacity: '',
        availability: ''
    });

    // Fetch rooms
    useEffect(() => {
        axios.get('http://localhost:3000/rooms')
            .then(response => setRooms(response.data))
            .catch(error => console.log(error));
    }, []);

    // Create new room
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/rooms', newRoom)
            .then(response => setRooms([...rooms, response.data]))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Rooms</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={newRoom.room_id}
                    onChange={(e) => setNewRoom({ ...newRoom, room_id: e.target.value })}
                    placeholder="Room ID"
                />
                <input
                    type="text"
                    value={newRoom.room_type}
                    onChange={(e) => setNewRoom({ ...newRoom, room_type: e.target.value })}
                    placeholder="Room Type"
                />
                <input
                    type="number"
                    value={newRoom.capacity}
                    onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })}
                    placeholder="Capacity"
                />
                <input
                    type="text"
                    value={newRoom.availability}
                    onChange={(e) => setNewRoom({ ...newRoom, availability: e.target.value })}
                    placeholder="Availability"
                />
                <button type="submit">Add Room</button>
            </form>

            <h2>Room List</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room._id} id='text'>
                        {room.room_type} - Capacity: {room.capacity} - Availability: {room.availability}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rooms;
