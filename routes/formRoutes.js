const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/create', formController.createCompany);
router.get('/companies', formController.getAllCompanies);
router.get('/company/:id', formController.getCompanyById);
router.put('/company/:id', formController.updateCompany);
router.delete('/company/:id', formController.deleteCompany);

module.exports = router;
