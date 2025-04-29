const SupportRequest = require('../models/SupportRequest');

exports.createSupportRequest = async (req, res) => {
    try {
        const newItem = new SupportRequest(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSupportRequests = async (req, res) => {
    try {
        const items = await SupportRequest.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSupportRequestById = async (req, res) => {
    try {
        const item = await SupportRequest.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "SupportRequest not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSupportRequest = async (req, res) => {
    try {
        const updatedItem = await SupportRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "SupportRequest not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSupportRequest = async (req, res) => {
    try {
        const deletedItem = await SupportRequest.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "SupportRequest not found" });
        res.status(200).json({ message: "SupportRequest deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};