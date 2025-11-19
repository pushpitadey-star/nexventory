const express = require('express');
const router = express.Router();
const { getItems, addItem, deleteItem } = require('../controllers/inventoryController');

router.get('/items', getItems);
router.post('/items', addItem);
router.delete('/items/:id', deleteItem);

module.exports = router;