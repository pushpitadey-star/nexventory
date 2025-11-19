const express = require('express');
const router = express.Router();
const { getAllOrders, addOrder } = require('../controllers/ordercontroller');

router.get('/', getAllOrders);
router.post('/', addOrder);

module.exports = router;