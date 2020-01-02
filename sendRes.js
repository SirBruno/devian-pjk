const axios = require('axios');

module.exports = {
    handleRequest(req, res) {
        axios.get('https://www.deviantart.com/oauth2/token?client_id=*****&client_secret=*****&grant_type=client_credentials').then(response => {
            console.log(response.data.access_token);
            x = response.data.access_token;
            console.log("x = " + x);
            res.send(response.data);
        }).catch(err => {
            console.log(err)
            res.send({ err }) // <= send error
        });
    }
}