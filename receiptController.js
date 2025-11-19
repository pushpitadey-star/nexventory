const db = require('../db/connection');

exports.getAllReceipts = (req, res) => {
      console.log('GET /api/receipts hit');
  db.query('SELECT * FROM Receipt', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addReceipt = (req, res) => {
  const { ProductName, ProductCategory, Ingredients, Method } = req.body;
  db.query(
    'INSERT INTO Receipt (ProductName, ProductCategory, Ingredients, Method) VALUES (?, ?, ?, ?)',
    [ProductName, ProductCategory, Ingredients, Method],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Receipt added successfully' });
    }
  );
};