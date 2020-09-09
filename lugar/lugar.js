const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodedUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org',
        headers:{'Content-Type':'application/json'}
      });
    
    const resp = await instance.get(`/data/2.5/weather?q=${encodedUrl}&units=metric&appid=ef65fc3dd443ae9cd219b51a463b628e`);
    
    if ( resp.isAxiosError ) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}