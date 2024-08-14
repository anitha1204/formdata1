const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    address: { type: String },
    registeredOfficeAddress: { type: String },
    chiefExecutiveName: { type: String, required: true },
    designation: { type: String, required: true },
    yearOfEstablishment: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String },
    website: { type: String },
    businessActivity: { type: String },
    paidUpCapital: { type: String },
    numberOfEmployees: { type: String },
    annualTurnover: { type: String },
    gstNo: { type: String },
    natureOfCompany: { type: String },
    keyContactPerson: { type: String },
    keyContactMobile: { type: String },
    secondaryContactPerson: { type: String },
    secondaryContactMobile: { type: String }
});

module.exports = mongoose.model('Company', companySchema);
