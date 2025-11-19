const db = require('../db/connection');

exports.getItems = (req, res) => {
  db.query('SELECT * FROM product', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addItem = (req, res) => {
  const { name, quantity } = req.body;
  db.query('INSERT INTO product (name, quantity) VALUES (?, ?)', [name, quantity], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, name, quantity });
  });
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM product WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
};