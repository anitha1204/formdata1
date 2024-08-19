const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  recipients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }],
  sentAt: {
    type: Date,
    default: Date.now
  },
  isDraft: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Email', EmailSchema);