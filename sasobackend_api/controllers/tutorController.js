const Tutor = require('../models/Tutor');

exports.createTutor = async (req, res) => {
    try {
        const newItem = new Tutor(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllTutors = async (req, res) => {
    try {
        const items = await Tutor.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTutorById = async (req, res) => {
    try {
        const item = await Tutor.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Tutor not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTutor = async (req, res) => {
    try {
        const updatedItem = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Tutor not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTutor = async (req, res) => {
    try {
        const deletedItem = await Tutor.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Tutor not found" });
        res.status(200).json({ message: "Tutor deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};