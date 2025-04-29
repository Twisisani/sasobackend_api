const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
    try {
        const newItem = new Student(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const items = await Student.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const item = await Student.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Student not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const updatedItem = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Student not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const deletedItem = await Student.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};