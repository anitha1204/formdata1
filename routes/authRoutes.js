// const express = require('express');
// const { register, login } = require('../controllers/authControllers');
// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;


const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authControllers');
const router = express.Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Route for forgot password
router.post('/forgot-password', forgotPassword);

// Route for reset password
router.post('/reset-password', resetPassword);

module.exports = router;
