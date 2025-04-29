const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
    try {
        const newItem = new Message(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const items = await Message.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMessageById = async (req, res) => {
    try {
        const item = await Message.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Message not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMessage = async (req, res) => {
    try {
        const updatedItem = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Message not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const deletedItem = await Message.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Message not found" });
        res.status(200).json({ message: "Message deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};