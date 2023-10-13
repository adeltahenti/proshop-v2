// server.js file

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
// import products from './data/products.js'; // must use .js extension using import
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import 'colors';

const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} ...`.rainbow)
);
