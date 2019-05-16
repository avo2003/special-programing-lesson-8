require('dotenv').config();

const express = require('express');
require('./db/mongoConnect');
const app = express();

const productRoutes=require('./routes/productRoutes');

app.use(express.json());
app.use('/api/products',productRoutes);

const PORT = process.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));