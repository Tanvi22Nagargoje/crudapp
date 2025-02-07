const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database'); // Import the database configuration

const User2 = sequelize.define('User2', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Name cannot be empty' },
      len: { args: [3, 50], msg: 'Name must be between 3 and 50 characters' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'Email cannot be empty' },
      isEmail: { msg: 'Must be a valid email address' },
    },
  },
  mobNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'Mobile number cannot be empty' },
      isNumeric: { msg: 'Mobile number must contain only digits' },
      len: { args: [10, 10], msg: 'Mobile number must be exactly 10 digits' },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Password cannot be empty' },
      len: { args: [6, 255], msg: 'Password must be at least 6 characters long' },
    },
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Hash password before saving
/*User2.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});*/

// Hook to hash the password before creating a user
User2.beforeCreate(async (user) => {
    if (user.password) {
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  });
  
  // Hook to hash the password before updating a user
  User2.beforeUpdate(async (user) => {
    if (user.password && user.changed('password')) {
      // Hash the password before updating it
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  });

module.exports = User2;
