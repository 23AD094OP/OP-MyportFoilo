const { Schema, model } = require('mongoose');

// Room Schema
const roomSchema = new Schema({
    room_id: { type: Number, required: true },
    room_type: { type: String, required: true },
    capacity: { type: Number, required: true },
    availability: { type: Boolean, required: true }
});

module.exports = model("Room", roomSchema);
