const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const getClima = async ( lat, lng) =>{
    const owkeyapp = process.env.APP_KEY_OPENWEATHER;
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${owkeyapp}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}