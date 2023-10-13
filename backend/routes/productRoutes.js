import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';
// import products from '../data/products.js';
const router = express.Router();

// With controllers
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// Without controllers
// ________________________________________________________________
// Serve all products
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     // throw new Error('Some error');
//     res.json(products);
//   })
// );

// // Serve one product
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       return res.json(product);
//     } else {
//       // res.status(404).json({ message: 'Product not found' });
//       res.status(404);
//       throw new Error('Resource not found');
//     }
//   })
// );

export default router;
