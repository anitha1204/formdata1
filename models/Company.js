const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  address: { type: String, required: false }, // Optional field
  registeredOfficeAddress: { type: String, required: false }, // Optional field
  chiefExecutiveName: { type: String, required: true },
  designation: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: false }, // Optional field
  website: { type: String, required: false }, // Optional field
  yearOfEstablishment: { type: Number, required: true },
  numberOfEmployees: { type: Number, required: true },
  annualTurnover: { type: String, required: false }, // Optional field
  gstNo: { type: String, required: false }, // Optional field
  natureOfCompany: { type: String, required: true },
  businessActivity: { type: String, required: true },
  paidUpCapital: { type: String, required: true },
  keyContactPerson: { type: String, required: true },
  secondaryContactPerson: { type: String, required: false }, // Optional field
});

module.exports = mongoose.model('Company', CompanySchema);
