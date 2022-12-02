require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use('/', express.static('src/firstspirit-preview'));

app.listen(PORT ?? 3000, () => console.log(`Server started on PORT ${PORT ?? 3000}`));
