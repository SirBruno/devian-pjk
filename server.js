const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const router = express.Router();

app.use(cors())

app.get('/', (req, res) => {
    const getVal = () => {
        let x = 0;

        app.get('https://www.deviantart.com/oauth2/token?client_id=11098&client_secret=50a4ccbfb09dd628f32ee7c630f0d185&grant_type=client_credentials');

        return x;
    }
    console.log(getVal())
    res.send(getVal());
});

app.listen(5000, () => {
    console.log("Running on http://localhost:5000")
});