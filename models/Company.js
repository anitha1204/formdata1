const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Companys', CompanySchema);  // Model name changed to Companys
