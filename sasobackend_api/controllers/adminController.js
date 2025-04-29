const Admin = require('../models/Admin');

exports.createAdmin = async (req, res) => {
    try {
        const newItem = new Admin(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const items = await Admin.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const item = await Admin.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Admin not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const updatedItem = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Admin not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const deletedItem = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Admin not found" });
        res.status(200).json({ message: "Admin deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};