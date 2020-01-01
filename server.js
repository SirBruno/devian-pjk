const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const router = express.Router();
const testx = require('./testx');

app.use(cors())

app.get('/', testx.getStuff);

app.listen(5000, () => {
    console.log("Running on http://localhost:5000")
});