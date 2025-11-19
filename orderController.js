const db = require('../db/connection');

exports.getAllOrders = (req, res) => {
  db.query('SELECT * FROM `Order`', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addOrder = (req, res) => {
  const { OrderNumber, OrderDate, CustomerID } = req.body;
  db.query(
    'INSERT INTO `Order` (OrderNumber, OrderDate, CustomerID) VALUES (?, ?, ?)',
    [OrderNumber, OrderDate, CustomerID],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Order added successfully' });
    }
  );
};