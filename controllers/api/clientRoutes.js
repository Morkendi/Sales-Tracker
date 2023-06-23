const router = require("express").Router();
// Require Model
const { Client } = require("../../models");

// CRUD Operations

// Get All
router.get("/", async (req, res) => {
  try {
    const clientData = await Client.findAll(
    // TODO: Add associated models (If any)

    );
    clientData
      ? res.status(200).json(clientData)
      : res.status(404).json({ message: "No clients found!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const singleClient = await Client.findByPk(req.params.id, {
      // TODO: Add associated models (If any)
    });
    singleClient
      ? res.status(200).json(clientData)
      : res.status(404).json({ message: "No client found!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Client
router.post("/", async (req, res) => {
  try {
    const newClient = await Client.create({
      client_name: req.body.client_name,
    });
    res.status(200).json(newClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Client
router.put("/:id", async (req, res) => {
  try {
    const updateClient = await Client.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    updateClient
      ? res.status(200).json(updateClient)
      : res.status(404).json({ message: "No client found!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Client
router.delete("/:id", async (req, res) => {
  try {
    const deleteClient = await Client.destroy({
      where: {
        id: req.params.id,
      },
    });
    deleteClient 
    ? res.status(200).json(deleteClient) 
    : res.status(404).json({ message: "No client found!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
