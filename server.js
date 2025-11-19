const express = require('express');
const cors = require('cors');
const app = express();

const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');
const supplierRoutes = require('./routes/supplier');
const employeeRoutes = require('./routes/employee');
const receiptRoutes = require('./routes/receipt');
const orderPurchaseRoutes = require('./routes/orderPurchase');


app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/order-purchases', orderPurchaseRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});