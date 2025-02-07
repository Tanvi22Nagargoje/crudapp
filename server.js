const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Use the user routes
app.use('/api', userRoutes);

// Sync Sequelize models and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('Error syncing database:', err));
