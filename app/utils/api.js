var axios = require('axios');

var apiKey = 'a14b5b19ba12f3e8bd1524fb28064102';
var url = 'http://api.openweathermap.org/data/2.5/';

function getWeather (city) {
    return axios.get(url + 'weather?q=' + city + '&type=accurate&APPID=' + apiKey).then(
        function (response) {
            return response.data;
        }
    )
}

function getForecast (city) {
    return axios.get(url + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + apiKey).then(
        function (response) {
            return response.data;
        }
    )
}

module.exports = {
    getWeather: getWeather,
    getForecast: getForecast
}