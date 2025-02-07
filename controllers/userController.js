const bcrypt = require('bcryptjs');
const User2 = require('../models/user'); // Import User2 model

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobNo, password, role } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User2.create({
      name,
      email,
      mobNo,
      password: hashedPassword, // Store hashed password
      role: role || 'user', // Default role is 'user'
    });

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User2.findAll({
      attributes: { exclude: ['password'] }, // Exclude password field
    });
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Failed to fetch users',
    });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User2.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }, // Exclude password field
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'User fetched successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Failed to fetch user',
    });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { name, email, mobNo, password, role } = req.body;
    const user = await User2.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found',
      });
    }

    // Hash the password if it's being updated
    const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;

    await user.update({
      name,
      email,
      mobNo,
      password: hashedPassword,
      role,
    });

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'User updated successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Failed to update user',
    });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User2.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found',
      });
    }
    await user.destroy();
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Failed to delete user',
    });
  }
};
