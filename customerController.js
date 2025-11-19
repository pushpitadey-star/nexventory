const db = require('../db/connection');

exports.getAllCustomers = (req, res) => {
  db.query('SELECT * FROM Customer', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addCustomer = (req, res) => {
  const { CustomerName, FirstName, Phone, Street, State, Zip } = req.body;
  db.query(
    'INSERT INTO Customer (CustomerName, FirstName, Phone, Street, State, Zip) VALUES (?, ?, ?, ?, ?, ?)',
    [CustomerName, FirstName, Phone, Street, State, Zip],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Customer added successfully' });
    }
  );
};