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
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

// Update a company
exports.updateCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(updatedCompany);
    } catch (error) {
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
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};


const send = async (companyName,address,email,mobile, website,keyContactPerson) => {
    try {
        console.log("data",companyName,address,email,mobile, website,keyContactPerson);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
                
            },
        });
        const mailoption = {
            form:process.env.EMAIL,
            to: [email, ""],
            subject: "Booking the room",
            text: `Dear ${userName}`,
        };
        await transporter.sendMail(mailoption);
        console.log("Mail sent successfully");
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};









// const Company = require('../models/Companyform');
// const User = require('../models/User');
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//     },
// });

// // Generate a random password
// const generatePassword = () => {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//         password += charset.charAt(Math.floor(Math.random() * charset.length));
//     }
//     return password;
// };

// // Create a new company
// exports.createCompany = async (req, res) => {
//     try {
//         const company = new Company(req.body);
//         const savedCompany = await company.save();

//         const password = generatePassword();
//         const newUser = new User({
//             username: savedCompany.keyContactPerson,
//             email: savedCompany.email,
//             password: password,
//             companyId: savedCompany._id
//         });

//         await newUser.save();

//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: savedCompany.email,
//             subject: 'Your New Account',
//             text: `Your account has been created. Your password is: ${password}`
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(201).json({
//             company: savedCompany,
//             message: 'Company created and user account email sent successfully'
//         });
//     } catch (error) {
//         console.error('Error creating company:', error);
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
//         console.error('Error in getAllCompanies:', error);
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
//         console.error('Error in searchCompanies:', error);
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
//         console.error('Error in getCompanyById:', error);
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
//         console.error('Error in updateCompany:', error);

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
//         console.error('Error in deleteCompany:', error);
//         res.status(500).json({ error: 'Server error. Please try again later.' });
//     }
// };
