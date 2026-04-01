

export function weatherCard(percent, Speed, temp ) {
    const card = document.createElement('div');
    card.className = 'weatherCard';
    const hLogo = document.createElement('img');
    hLogo.src = 'icons/drop.png';
    hLogo.style.width = '30px';
    const wLogo = document.createElement('img');
    wLogo.src = 'icons/wind.png';
    wLogo.style.width = '30px';
    const tLogo = document.createElement('img');
    tLogo.src = 'icons/temperature.png';
    tLogo.style.width = '30px'

    const div1 = document.createElement('div');
    div1.className = 'div1Card divCard';
    const div2 = document.createElement('div');
    div2.className = 'div2Card divCard';
    const div3 = document.createElement('div');
    div3.className = 'div3Card divCard';

//boxes inside  the third div
    const humidity = document.createElement('div');
    humidity.className = 'humidity box'
    const wind = document.createElement('div');
    wind.className = 'wind box'
    const feelsLike = document.createElement('div');
    feelsLike.className = 'feelsLike box'

    div3.appendChild(humidity);
    div3.appendChild(wind);
    div3.appendChild(feelsLike);

//creation of spans
    //span for humidity
    const humidityLogo = document.createElement('span');
    humidityLogo.className = 'humidityLogo';
    humidityLogo.appendChild(hLogo)
    const humidityPercentage = document.createElement('span');
    humidityPercentage.className = 'humidityPercentage';  
    const humidityText = document.createElement('span');
    humidityText.className = 'humidityText';

    //text
    // humidityLogo.innerHTML = 'logo';
    humidityPercentage.innerHTML = percent;
    humidityText.innerHTML = 'humidity';
    
    //appending to humidity
    humidity.appendChild(humidityLogo);
    humidity.appendChild(humidityPercentage);
    humidity.appendChild(humidityText);


    //span wind
    const windLogo = document.createElement('span'); 
    windLogo.className = 'windLogo';  
    windLogo.appendChild(wLogo);
    const windSpeed = document.createElement('span');
    windSpeed.className = 'windPercentage';  
    const windText = document.createElement('span');
    windText.className = 'windText';

    //text
    // windLogo.innerHTML = 'logo';
    windSpeed.innerHTML = Speed;
    windText.innerHTML = 'wind';
    
    //appending to humidity
    wind.appendChild(windLogo);
    wind.appendChild(windSpeed);
    wind.appendChild(windText);


     //span feelsLike
    const feelsLikeLogo = document.createElement('span');
    feelsLikeLogo.className = 'feelsLikeLogo';
    feelsLikeLogo.appendChild(tLogo);
    const feelsLikeTemp = document.createElement('span');
    feelsLikeTemp.className = 'feelsLikeTemp';  
    const feelsLikeText = document.createElement('span');
    feelsLikeText.className = 'feelsLikeText';

    //text
    // feelsLikeLogo.innerHTML = 'logo';
    feelsLikeTemp.innerHTML = temp;
    feelsLikeText.innerHTML = 'feels like';
    
    //appending to humidity
    feelsLike.appendChild(feelsLikeLogo);
    feelsLike.appendChild(feelsLikeTemp);
    feelsLike.appendChild(feelsLikeText);


//div inside the card
    card.appendChild(div1);
    card.appendChild(div2);
    card.appendChild(div3);



    //three spans for middle div

    const tempMid = document.createElement('span');
    tempMid.className = 'tempMid';
    const weather = document.createElement('span');
    weather.className = 'weather';
    const dayLine = document.createElement('span');
    dayLine.className = 'dayLine';

    //appending in middle div
    div2.appendChild(tempMid);
    div2.appendChild(weather);
    div2.appendChild(dayLine);

    tempMid.innerHTML = temp;
    weather.innerHTML = 'Stormy'
    dayLine.innerHTML = 'Perfect weather for a walk';


    return card;

}