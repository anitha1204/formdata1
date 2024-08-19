const express = require('express');
const router = express.Router();
const { getAllCompanies, addCompany, getFilteredCompanies } = require('../controllers/companyController');

router.get('/', getAllCompanies);
router.post('/', addCompany);
router.get('/filter', getFilteredCompanies);

module.exports = router;