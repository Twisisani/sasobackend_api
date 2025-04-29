const TutorCourse = require('../models/TutorCourse');

exports.createTutorCourse = async (req, res) => {
    try {
        const newItem = new TutorCourse(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllTutorCourses = async (req, res) => {
    try {
        const items = await TutorCourse.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTutorCourseById = async (req, res) => {
    try {
        const item = await TutorCourse.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "TutorCourse not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTutorCourse = async (req, res) => {
    try {
        const updatedItem = await TutorCourse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "TutorCourse not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTutorCourse = async (req, res) => {
    try {
        const deletedItem = await TutorCourse.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "TutorCourse not found" });
        res.status(200).json({ message: "TutorCourse deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};