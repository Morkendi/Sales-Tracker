const router = require('express').Router();
// Require Model
const { Product } = require('../../models');

// CRUD Operations

// Get All
router.get("/", async (req, res) => {
    try {
    const ProductData = await Product.findAll(
        // TODO: Add associated models (If any)
    );
    ProductData
        ? res.status(200).json(ProductData)
        : res.status(404).json({ message: "No products found!" });
    } catch (err) {
    res.status(500).json(err);
    }
});

// Get by ID
router.get('/:id', async (req, res) => {
    try{
        const singleProduct = await Product.findByPk(req.params.id, {
            // TODO: Add associated models (If any)
        });
        singleProduct
            ? res.status(200).json(singleProduct)
            : res.status(404).json({ message: "No product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create Product
router.post('/', async (req, res) => {
    try{
        const newProduct = await Product.create({
            product_name: req.body.product_name,
            price: req.body.price
        });
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Product
router.put('/:id', async (req, res) => {
    try{
        const updateProduct = await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        updateProduct
            ? res.status(200).json(updateProduct)
            : res.status(404).json({ message: "No product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try{
        const deleteProduct = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        deleteProduct
            ? res.status(200).json(deleteProduct)
            : res.status(404).json({ message: "No product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;