const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    try {
        const newItem = new Course(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const items = await Course.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const item = await Course.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const updatedItem = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const deletedItem = await Course.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};