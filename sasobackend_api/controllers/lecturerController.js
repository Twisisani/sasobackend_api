const Lecturer = require('../models/Lecturer');

exports.createLecturer = async (req, res) => {
    try {
        const newItem = new Lecturer(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllLecturers = async (req, res) => {
    try {
        const items = await Lecturer.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLecturerById = async (req, res) => {
    try {
        const item = await Lecturer.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateLecturer = async (req, res) => {
    try {
        const updatedItem = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLecturer = async (req, res) => {
    try {
        const deletedItem = await Lecturer.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json({ message: "Lecturer deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};