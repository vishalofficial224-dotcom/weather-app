//main.js
import { weatherCard } from "./components/weatherCard.js";
import {weatherData} from "./data/data.js";
import {search} from "./components/search.js"




// Get the mount point
const app = document.getElementById('app');
const currentData = await weatherData("Delhi");

async function handleSearch(city) {
    const newData = await weatherData(city)
    if(newData){
        const oldCard = document.querySelector('.weatherCard');
        if(oldCard) app.removeChild(oldCard)

        app.appendChild(weatherCard(newData.relative_humidity_2m, newData.wind_speed_10m, newData.temperature_2m))
    }

}



app.appendChild(search(handleSearch));
app.appendChild(weatherCard(currentData.relative_humidity_2m, currentData.wind_speed_10m, currentData.temperature_2m));



