const Session = require('../models/Session');

exports.createSession = async (req, res) => {
    try {
        const newItem = new Session(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSessions = async (req, res) => {
    try {
        const items = await Session.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSessionById = async (req, res) => {
    try {
        const item = await Session.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Session not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSession = async (req, res) => {
    try {
        const updatedItem = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Session not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSession = async (req, res) => {
    try {
        const deletedItem = await Session.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Session not found" });
        res.status(200).json({ message: "Session deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};