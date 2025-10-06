const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Product CRUD API using Node.js + MongoDB (MVC Pattern)');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
