const COORDS = "coords";

function handleGeoSuccess(position) {
    const latitude = ;
    const longitude = ;
    const coordsObj = {
        latitude,
        longitude
    }
    //강의 이어보기
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoError, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askCoords();
    } 
    else {
        //getWeather
    }
}

function init() {

}
init();