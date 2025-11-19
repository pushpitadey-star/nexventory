const db = require('../db/connection');

exports.getAllSuppliers = (req, res) => {
  db.query('SELECT * FROM Supplier', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addSupplier = (req, res) => {
  const { SupplierName, SupplierPhone, SupplierEmail } = req.body;
  db.query(
    'INSERT INTO Supplier (SupplierName, SupplierPhone, SupplierEmail) VALUES (?, ?, ?)',
    [SupplierName, SupplierPhone, SupplierEmail],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Supplier added successfully' });
    }
  );
};