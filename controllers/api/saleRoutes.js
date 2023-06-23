const router = require('express').Router();
// Require Model
const { Sale } = require('../../models');

// CRUD Operations

// Get All
router.get('/', async (req, res) => {
    try{
        const saleData = await Sale.findAll(
            // TODO: Add associated models (If any)
        );
        saleData
            ? res.status(200).json(saleData)
            : res.status(404).json({ message: "No sales found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get by ID
router.get('/:id', async (req, res) => {
    try{
        const singleSale = await Sale.findByPk(req.params.id, {
            // TODO: Add associated models (If any)
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create Sale
router.post('/', async (req, res) => {
    try{
        const newSale = await Sale.create({
            user_id: req.body.user_id,
            client_id: req.body.client_id,
            date_created: req.body.date_created
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Sale
router.put('/:id', async (req, res) => {
    try{
        const updateSale = await Sale.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        updateSale
            ? res.status(200).json(updateSale)
            : res.status(404).json({ message: "No sale found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Sale
router.delete('/:id', async (req, res) => {
    try{
        const deleteSale = await Sale.destroy({
            where: {
                id: req.params.id
            }
        });
        deleteSale
            ? res.status(200).json(deleteSale)
            : res.status(404).json({ message: "No sale found!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;