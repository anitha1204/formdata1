const Company = require('../models/Company');

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('category');
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addCompany = async (req, res) => {
  try {
    const newCompany = new Company({
      name: req.body.name,
      category: req.body.category,
      email: req.body.email,
      position: req.body.position
    });

    const company = await newCompany.save();
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getFilteredCompanies = async (req, res) => {
  try {
    const { categories, position } = req.query;
    const filter = {};
    if (categories) filter.category = { $in: categories.split(',') };
    if (position) filter.position = position;

    const companies = await Company.find(filter).populate('category');
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};