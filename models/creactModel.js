// models/creactModel.js
const mongoose = require('mongoose');

const CreactSchema = new mongoose.Schema({
    UserName: { type: String, required: true },
    EmailId: { type: String, required: true, unique: true },
    PassWord: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Creact', CreactSchema);
