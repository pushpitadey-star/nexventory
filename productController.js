const db = require('../db/connection');

exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM Product', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addProduct = (req, res) => {
  const { ProductName, ProductCategory, ProductDescription, ProductPrice } = req.body;
  db.query(
    'INSERT INTO Product (ProductName, ProductCategory, ProductDescription, ProductPrice) VALUES (?, ?, ?, ?)',
    [ProductName, ProductCategory, ProductDescription, ProductPrice],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Product added successfully' });
    }
  );
};