const colors = require('colors/safe');
const axios = require('axios');
const appid = 'aqui va tu apikey';

// ejemplos por id o por ciudad
// http://api.openweathermap.org/data/2.5/weather?q=caracas&appid=aqui va tu apikey
// http://api.openweathermap.org/data/2.5/forecast?id=3687925&appid=aqui va tu apikey



const getLugar = (ciudad) => {

    let lng;
    let lat;
    let pais;
    let city;
    let temp;
    let data;
    //let response = null;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appid}&units=metric`)
    .then( function(response){

        data = response.data;
        lng = data.coord.lon;
        lat = data.coord.lat;
        temp = data.main.temp;
        city = data.name;
        pais = data.sys.country;

        //console.log(data);
        // esto es para pasar kelvin a celcius
        //temp = data.main.temp - 273.15;
        //temp = parseFloat(temp).toFixed(2);

        console.log(colors.green('=========== Info ==========='));
        console.log(`  ${city} ${temp} grados`);
        console.log(`  pais: ${pais}`);
        console.log(`  lat: ${lat}`);
        console.log(`  lng: ${lng}`);
        console.log( colors.green(`https://www.google.es/maps?q=${lat},${lng}`));
        console.log(colors.green('============================'));

    })
    .catch(function(error){

        console.log('No hay datos para la ciudad ',colors.inverse(`${ciudad}`));

    });

    
        
}


module.exports = {
    getLugar
}