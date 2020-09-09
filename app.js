const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// lugar.getLugarLatLng( argv.direccion )
// .then(console.log);
// clima.getClima(40.42, -3.7)
//     .then(console.log);

const getInfo = async (direccion) => {
    
    try {
        const coordenadas =  await lugar.getLugarLatLng(direccion);
        console.log(coordenadas);
        const temperatura =  await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}. ${error}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)