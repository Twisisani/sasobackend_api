const mongoose = require('mongoose');

const SupportRequestSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: String,
    message: String,
    status: { type: String, default: 'open' },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SupportRequest', SupportRequestSchema);