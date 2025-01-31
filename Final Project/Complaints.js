const { Schema, model } = require('mongoose');

// Complaint Schema
const complaintSchema = new Schema({
    complaint_id: { type: Number, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    complaint_type: { type: String, required: true },
    complaint_details: { type: String, required: true },
    status: { type: String, required: false }
});

module.exports = model("Complaint", complaintSchema);
