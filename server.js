const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const getAccessToken = require('./getAccessToken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', getAccessToken.sendResponse);

app.listen(5000, () => {
    console.log("Running on http://localhost:5000")
});