const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    view_analytics: { type: Boolean, default: false },
});

module.exports = mongoose.model('Admin', AdminSchema);