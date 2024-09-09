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


// const send = async (companyName,address,email,mobile, website,keyContactPerson) => {
//     try {
//         console.log("data",companyName,address,email,mobile, website,keyContactPerson);
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.EMAIL_PASSWORD,
                
//             },
//         });
//         const mailoption = {
//             form:process.env.EMAIL,
//             to: [email, ""],
//             subject: "Booking the room",
//             text: `Dear ${keyContactPerson}`,
//         };
//         await transporter.sendMail(mailoption);
//         console.log("Mail sent successfully");
//     } catch (error) {
//         console.error("Error sending email:", error.message);
//     }
// };



const Company = require('../models/Companyform');
const nodemailer = require('nodemailer');

// Generate random password
const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    return Array(8).fill(0).map(() => charset.charAt(Math.floor(Math.random() * charset.length))).join('');
};

// Send email
const sendPasswordEmail = async (company, password) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: company.email,
            subject: "Your New Account Access",
            text: `Dear ${company.keyContactPerson},

Your new account has been created for ${company.companyName}. Please use the following credentials to log in:

Email: ${company.email}
Password: ${password}

Company Details:
Address: ${company.address}
Mobile: ${company.mobile}
Website: ${company.website}

Please change your password after your first login.

Best regards,
Your Application Team`
        };

        await transporter.sendMail(mailOptions);
        console.log("Mail sent successfully");
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw error;
    }
};

// Create new company
exports.createCompany = async (req, res) => {
    try {
        const password = generatePassword();
        const company = new Company({ ...req.body, password });

        const savedCompany = await company.save();
        await sendPasswordEmail(savedCompany, password);

        res.status(201).json(savedCompany);
    } catch (error) {
        console.error("Error creating company:", error.message);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ errors: Object.values(error.errors).map(err => err.message) });
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
            text: `Dear ${keyContactPerson}`,
        };
        await transporter.sendMail(mailoption);
        console.log("Mail sent successfully");
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};
















