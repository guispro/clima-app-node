const axios = require('axios');

const getClima = async ( lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ef65fc3dd443ae9cd219b51a463b628e`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}