const express = require('express');
const router = express.Router();
const { getAllReceipts, addReceipt } = require('../controllers/receiptController');

router.get('/', getAllReceipts);
router.post('/', addReceipt);

module.exports = router;