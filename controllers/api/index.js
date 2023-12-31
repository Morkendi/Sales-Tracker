const router = require('express').Router();

// Setup file paths
const clientRoutes = require('./clientRoutes');
const productRoutes = require('./productRoutes');
const saleProductRoutes = require('./saleProductRoutes');
const saleRoutes = require('./saleRoutes');
const userRoutes = require('./userRoutes');

// Setup endpoints
router.use('/clients', clientRoutes);
router.use('/products', productRoutes);
router.use('/saleProducts', saleProductRoutes);
router.use('/sales', saleRoutes);
router.use('/users', userRoutes);

module.exports = router