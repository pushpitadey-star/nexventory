const db = require('../db/connection');

exports.getAllEmployees = (req, res) => {
  db.query('SELECT * FROM Employee', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addEmployee = (req, res) => {
  const { EmployeeName } = req.body;
  db.query(
    'INSERT INTO Employee (EmployeeName) VALUES (?)',
    [EmployeeName],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Employee added successfully' });
    }
  );
};