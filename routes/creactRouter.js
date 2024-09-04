const express = require('express');
const router = express.Router();
const creactController = require('../controllers/creactControllers');

// Route to create a new user
router.post('/create', creactController.createUser);

// Route to get all users
router.get('/users', creactController.getAllUsers);

// Route to update a user by ID
router.put('/user/:id', creactController.updateUser);

// Route to delete a user by ID
router.delete('/user/:id', creactController.deleteUser);

module.exports = router;
