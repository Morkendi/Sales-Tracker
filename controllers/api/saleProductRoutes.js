const router = require('express').Router();
// Require Model
const { SaleProduct } = require('../../models');
// CRUD Operations

// Get All
/*
router.get('/', async (req, res) => {
    try{
        const SaleProductData = await SaleProduct.findAll(
            // TODO: Add associated models (If any)
        );
        SaleProductData
            ? res.status(200).json(SaleProductData)
            : res.status(404).json({ message: "No sale products found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get by ID
router.get('/:id', async (req, res) => {
    try{
        const singleSaleProduct = await SaleProduct.findByPk(req.params.id, {
            // TODO: Add associated models (If any)
        });
        singleSaleProduct
            ? res.status(200).json(singleSaleProduct)
            : res.status(404).json({ message: "No sale product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});
*/
// Create SaleProduct
router.post('/', async (req, res) => {
    try{
        const newSaleProduct = await SaleProduct.create({
            sale_id: req.body.sale_id,
            product_id: req.body.prod,
            quantity: req.body.quant,
        });
        res.status(200).json(newSaleProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update SaleProduct
router.put('/:id', async (req, res) => {
    try{
        const updateSaleProduct = await SaleProduct.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        updateSaleProduct
            ? res.status(200).json(updateSaleProduct)
            : res.status(404).json({ message: "No sale product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete SaleProduct
router.delete('/:id', async (req, res) => {
    try{
        const deleteSaleProduct = await SaleProduct.destroy({
            where: {
                id: req.params.id
            }
        });
        deleteSaleProduct
            ? res.status(200).json(deleteSaleProduct)
            : res.status(404).json({ message: "No sale product found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;