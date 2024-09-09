const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// CRUD routes for companies
router.post('/companies', formController.createCompany);
router.get('/companies', formController.getAllCompanies);
router.get('/companies/search', formController.searchCompanies);
router.get('/companies/:id', formController.getCompanyById);
router.put('/companies/:id', formController.updateCompany);
router.delete('/companies/:id', formController.deleteCompany);

module.exports = router;
