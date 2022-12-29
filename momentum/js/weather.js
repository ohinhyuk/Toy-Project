function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in",lat,lng);
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);