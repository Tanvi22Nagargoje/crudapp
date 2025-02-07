// config/database.js
require('dotenv').config(); // Load environment variables from .env file

const { Sequelize } = require('sequelize');

// Log the DB URL to confirm it is loaded correctly
console.log('Database URL:', process.env.DB_URL);

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false, // Optionally disable logging for cleaner output
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
