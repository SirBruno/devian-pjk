const axios = require('axios');

const getCode = () => {
    return axios.get('https://www.deviantart.com/oauth2/token?client_id=*****&client_secret=*****&grant_type=client_credentials').then(response => {
        return response.data.access_token;
    })
}

module.exports = {
    sendResponse(req, res) {
        let dailyDeviationsURL = 'https://www.deviantart.com/api/v1/oauth2/browse/hot?access_token=';
        let holdAccessToken = '';
        getCode().then(response => {
            holdAccessToken = response;
        }).then(() => {
            axios.get(`${dailyDeviationsURL}${holdAccessToken}&limit=12`).then(response => {
                res.send(response.data);
            })
        })
    }
}