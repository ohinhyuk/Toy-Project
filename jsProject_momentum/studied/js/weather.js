const API_KEY = "55e30bbd22e542be54e9acd66cf24261";
function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in",lat,lng);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);