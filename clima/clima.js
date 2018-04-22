"use strict";

const axios = require('axios');

const getClima = async(lat, lng) => {

    let key = '85e9395172aef3ffdf2db2ee234d0b06';

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${key}`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
};