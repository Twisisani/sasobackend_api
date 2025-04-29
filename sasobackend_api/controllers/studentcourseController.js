const StudentCourse = require('../models/StudentCourse');

exports.createStudentCourse = async (req, res) => {
    try {
        const newItem = new StudentCourse(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllStudentCourses = async (req, res) => {
    try {
        const items = await StudentCourse.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStudentCourseById = async (req, res) => {
    try {
        const item = await StudentCourse.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "StudentCourse not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStudentCourse = async (req, res) => {
    try {
        const updatedItem = await StudentCourse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "StudentCourse not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteStudentCourse = async (req, res) => {
    try {
        const deletedItem = await StudentCourse.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "StudentCourse not found" });
        res.status(200).json({ message: "StudentCourse deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};