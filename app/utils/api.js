import axios from 'axios';

const apiKey = 'a14b5b19ba12f3e8bd1524fb28064102';
const url = 'http://api.openweathermap.org/data/2.5/';

function getWeather (city) {
    return axios.get(`${url}weather?q=${city}&type=accurate&APPID=${apiKey}`).then(
        response => response.data
    )
}

function getForecast (city) {
    return axios.get(`${url}forecast/daily?q=${city}&type=accurate&APPID=${apiKey}`).then(
        response => response.data
    )
}

export default {
    getWeather,
    getForecast
}