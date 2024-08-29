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



// const Company = require('../models/Companyform');

// // Create a new company
// exports.createCompany = async (req, res) => {
//     try {
//         const company = new Company(req.body);
//         const savedCompany = await company.save();
//         res.status(201).json(savedCompany);
//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             const messages = Object.values(error.errors).map(err => err.message);
//             return res.status(400).json({ errors: messages });
//         }
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };

// // Get all companies
// exports.getAllCompanies = async (req, res) => {
//     try {
//         const companies = await Company.find();
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };

// // Search companies by name
// exports.searchCompanies = async (req, res) => {
//     try {
//         const { name } = req.query;
//         const companies = await Company.find({ companyName: new RegExp(name, 'i') });
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };

// // Get a company by ID
// exports.getCompanyById = async (req, res) => {
//     try {
//         const company = await Company.findById(req.params.id);
//         if (!company) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json(company);
//     } catch (error) {
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };

// // Update a company
// exports.updateCompany = async (req, res) => {
//     try {
//         const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json(updatedCompany);
//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             const messages = Object.values(error.errors).map(err => err.message);
//             return res.status(400).json({ errors: messages });
//         }
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };

// // Delete a company
// exports.deleteCompany = async (req, res) => {
//     try {
//         const result = await Company.findByIdAndDelete(req.params.id);
//         if (!result) return res.status(404).json({ message: 'Company not found' });
//         res.status(200).json({ message: 'Company deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Server error. Please try again later.' });
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
        console.error('Error creating company:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors: messages });
        }
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

// Search companies by name
exports.searchCompanies = async (req, res) => {
    try {
        const { name } = req.query;
        const companies = await Company.find({ companyName: new RegExp(name, 'i') });
        res.status(200).json(companies);
    } catch (error) {
        console.error('Error searching companies:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

// Get a company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company);
    } catch (error) {
        console.error('Error fetching company by ID:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};


// Update a company
exports.updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Company ID is required.' });
        }

        // Ensure the data conforms to the expected types and structure
        const updatedCompany = await Company.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found.' });
        }

        res.status(200).json(updatedCompany);
    } catch (error) {
        console.error('Error updating company:', error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors: messages });
        }

        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
    try {
        const result = await Company.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        console.error('Error deleting company:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

