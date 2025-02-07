const express = require('express');
const userController = require('../controllers/userController'); // Import controller

const router = express.Router();

// Define the routes
router.post('/users', userController.createUser);      // Create a new user
router.get('/users', userController.getUsers);         // Get all users
router.get('/users/:id', userController.getUserById);  // Get user by ID
router.put('/users/:id', userController.updateUser);   // Update user by ID
router.delete('/users/:id', userController.deleteUser); // Delete user by ID

module.exports = router;
