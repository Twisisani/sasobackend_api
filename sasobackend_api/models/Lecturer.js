const mongoose = require('mongoose');

const LecturerSchema = new mongoose.Schema({
    lecturer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
});

module.exports = mongoose.model('Lecturer', LecturerSchema);