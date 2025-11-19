const db = require('../db/connection');

exports.getAllOrderPurchases = (req, res) => {
  db.query('SELECT * FROM OrderPurchase', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addOrderPurchase = (req, res) => {
  const { OrderStatus, OrderDate, ProductID, SupplierID, EmployeeID } = req.body;
  db.query(
    'INSERT INTO OrderPurchase (OrderStatus, OrderDate, ProductID, SupplierID, EmployeeID) VALUES (?, ?, ?, ?, ?)',
    [OrderStatus, OrderDate, ProductID, SupplierID, EmployeeID],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'OrderPurchase added successfully' });
    }
  );
};