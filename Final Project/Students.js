const { Schema, model } = require('mongoose');

// Student Schema
const studentSchema = new Schema({
    student_id: { type: String, required: true },
    name: { type: String, required: true },
    roll_number: { type: String, required: true },
    department: { type: String, required: true },
    contact_number: { type: String, required: true }
});

module.exports = model("Student", studentSchema);
