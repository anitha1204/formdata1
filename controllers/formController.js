// const Company = require('../models/Company');

// exports.createCompany = async (req, res) => {
//   try {
//     const newCompany = new Company(req.body);
//     await newCompany.save();
//     res.status(201).json(newCompany);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getAllCompanies = async (req, res) => {
//   try {
//     const companies = await Company.find();
//     res.status(200).json(companies);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getCompanyById = async (req, res) => {
//   try {
//     const company = await Company.findById(req.params.id);
//     if (!company) {
//       return res.status(404).json({ error: 'Company not found' });
//     }
//     res.status(200).json(company);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateCompany = async (req, res) => {
//   try {
//     const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updatedCompany) {
//       return res.status(404).json({ error: 'Company not found' });
//     }
//     res.status(200).json(updatedCompany);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteCompany = async (req, res) => {
//   try {
//     const company = await Company.findByIdAndDelete(req.params.id);
//     if (!company) {
//       return res.status(404).json({ error: 'Company not found' });
//     }
//     res.status(200).json({ message: 'Company deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


const Company = require('../models/Company');

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    // Validate the request body if needed
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Request body cannot be empty' });
    }

    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Get a company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Update a company by ID
exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // Ensure the updated data adheres to model validation rules
    });

    if (!updatedCompany) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Delete a company by ID
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
