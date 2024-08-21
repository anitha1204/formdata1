


// const Company = require('../models/Companyform');

// // Create a new company
// exports.createCompany = async (req, res) => {
//     try {
//         const company = new Company(req.body);
//         const savedCompany = await company.save();
//         res.status(201).json(savedCompany);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Get all companies
// exports.getAllCompanies = async (req, res) => {
//     try {
//         const companies = await Company.find();
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


// // Search companies by name
// exports.searchCompanies = async (req, res) => {
//     try {
//         const { name } = req.query;
//         const companies = await Company.find({ companyName: new RegExp(name, 'i') });
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get a company by ID
// exports.getCompanyById = async (req, res) => {
//     try {
//         const company = await Company.findById(req.params.id);
//         if (!company) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json(company);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


// // Update a company
// exports.updateCompany = async (req, res) => {
//     try {
//         const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json(updatedCompany);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Delete a company
// exports.deleteCompany = async (req, res) => {
//     try {
//         const result = await Company.findByIdAndDelete(req.params.id);
//         if (!result) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json({ message: 'Company deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };






const Company = require('../models/Companyform');

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        const savedCompany = await company.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({}, 'companyName natureOfCompany'); // Project only needed fields
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Search companies by name
exports.searchCompanies = async (req, res) => {
    try {
        const { name } = req.query;
        const companies = await Company.find({ companyName: new RegExp(name, 'i') });
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id, 'companyName natureOfCompany');
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update a company
exports.updateCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
    try {
        const result = await Company.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};