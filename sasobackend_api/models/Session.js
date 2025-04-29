const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    instructor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    session_type: String,
    date_time: Date,
    location_or_link: String,
    is_online: Boolean,
});

module.exports = mongoose.model('Session', SessionSchema);