const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    session_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], required: true },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);