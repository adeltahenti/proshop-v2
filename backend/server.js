// server.js file

import express from 'express';
import products from './data/products.js'; // must use .js extension using import
import 'colors';

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Serve all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Serve one product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}...`.rainbow)
);
