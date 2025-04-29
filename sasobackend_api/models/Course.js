const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: String,
    course_code: String,
    department: String,
});

module.exports = mongoose.model('Course', CourseSchema);