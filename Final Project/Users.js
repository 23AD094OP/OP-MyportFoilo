const { Schema, model } = require('mongoose');

// User Schema
const userSchema = new Schema({
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = model("User", userSchema);
