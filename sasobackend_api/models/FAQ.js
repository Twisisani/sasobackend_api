const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    message_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true },
    question: String,
    answer: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    last_updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FAQ', FAQSchema);