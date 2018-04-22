'use strict'

const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let key = 'AIzaSyCc99lwlKxrG3FkOfkXseMrFSRZsVSlJT4';

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=${key}`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
        return;
    }
    let data = resp.data.results[0];
    let address = data.formatted_address;
    let location = data.geometry.location;

    return {
        direccion: address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLng
}