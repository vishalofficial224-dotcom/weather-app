



export async function weatherData(city) {

    //1 get coordinates
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();

    const longitude = geoData.results[0].longitude;
    const latitude = geoData.results[0].latitude;
    

    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m`);
    const data = await res.json();


    return data.current;


}



