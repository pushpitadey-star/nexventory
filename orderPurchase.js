const express = require('express');
const router = express.Router();
const { getAllOrderPurchases, addOrderPurchase } = require('../controllers/orderPurchaseController');

router.get('/', getAllOrderPurchases);
router.post('/', addOrderPurchase);

module.exports = router;