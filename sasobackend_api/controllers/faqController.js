const FAQ = require('../models/FAQ');

exports.createFAQ = async (req, res) => {
    try {
        const newItem = new FAQ(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllFAQs = async (req, res) => {
    try {
        const items = await FAQ.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFAQById = async (req, res) => {
    try {
        const item = await FAQ.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "FAQ not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFAQ = async (req, res) => {
    try {
        const updatedItem = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "FAQ not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFAQ = async (req, res) => {
    try {
        const deletedItem = await FAQ.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "FAQ not found" });
        res.status(200).json({ message: "FAQ deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};