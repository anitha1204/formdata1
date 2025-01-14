const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// CORS setup
app.use(cors());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);


// Error handling middleware
app.use(errorHandler);


const PORT = 9000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
