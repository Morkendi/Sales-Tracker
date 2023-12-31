const router = require('express').Router();
// Require Model
const { Sale } = require('../../models');

// CRUD Operations

// Create Sale
router.post('/', async (req, res) => {
    try{
        const newSale = await Sale.create({
            user_id: req.session.user_id,
            client_id: req.body.client_id
        });
    res.status(200).json(newSale)
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