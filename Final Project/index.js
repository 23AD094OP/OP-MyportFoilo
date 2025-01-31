const express = require('express');
const User = require('../models/Users.js');
const Room = require('../models/Rooms.js');
const Complaint = require('../models/Complaints.js');
const Student = require('../models/Students.js');
const router = express.Router();

const jwt = require('jsonwebtoken');


router.use(express.json());  // To parse JSON request bodies

router.post('/users', async (req, res) => {
        const { user_id,username, email, contact_number, role, password } = req.body;
        try {
                const user = new User({ user_id,username, email, contact_number, role, password });
                await user.save();
                res.status(201).json(user);
            } catch (error) {
                   console.log("post errorhv",error);
                    res.status(500).json({ message: 'Error creating user' });
                }
            });

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, contact_number, role } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, email, contact_number, role, password }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
});

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
});

// Rooms routes
router.post('/rooms', async (req, res) => {
    const { room_id, room_type, capacity, availability } = req.body;
    try {
        const room = new Room({ room_id, room_type, capacity, availability });
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error creating room' });
    }
});

router.get('/rooms', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rooms' });
    }
});

router.put('/rooms/:id', async (req, res) => {
    const { id } = req.params;
    const { room_type, capacity, availability } = req.body;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(id, { room_type, capacity, availability }, { new: true });
        res.json(updatedRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error updating room' });
    }
});

router.delete('/rooms/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRoom = await Room.findByIdAndDelete(id);
        res.json(deletedRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room' });
    }
});

// Complaints routes
router.post('/complaints', async (req, res) => {
    const { complaint_id, user_id, complaint_type, complaint_details, status } = req.body;
    try {
        const complaint = new Complaint({ complaint_id, user_id, complaint_type, complaint_details, status });
        await complaint.save();
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error creating complaint' });
    }
});

router.get('/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching complaints' });
    }
});

router.put('/complaints/:id', async (req, res) => {
    const { id } = req.params;
    const { complaint_type, complaint_details, status } = req.body;
    try {
        const updatedComplaint = await Complaint.findByIdAndUpdate(id, { complaint_type, complaint_details, status }, { new: true });
        res.json(updatedComplaint);
    } catch (error) {
        res.status(500).json({ message: 'Error updating complaint' });
    }
});

router.delete('/complaints/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComplaint = await Complaint.findByIdAndDelete(id);
        res.json(deletedComplaint);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting complaint' });
    }
});


router.post('/students', async (req, res) => {
    const { student_id, name, roll_number, department, contact_number } = req.body;
    try {
        const student = new Student({ student_id, name, roll_number, department, contact_number });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
});

router.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, roll_number, department, contact_number } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, { name, roll_number, department, contact_number }, { new: true });
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
});

router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        res.json(deletedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
});




router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);  // Check if email and password are being sent correctly
    
    try {
        console.log('Received email:', email); // Log the email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'Invalid email or password' });
        }
       console.log(user.password);
       
       const match = password === user.password;
       console.log('Plain Password:', password);
       console.log('Hashed Password:', user.password);
       console.log('Passwords match:', match);
       if (!match) {
           console.log('Password mismatch');
           return res.status(400).json({ message: 'Invalid email or password' });
       }

        const token = jwt.sign({ user_id: user._id, username: user.username }, 'your_jwt_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);  // Log the error to the console
        res.status(500).json({ message: 'Error logging in' });
    }
});



module.exports = router;