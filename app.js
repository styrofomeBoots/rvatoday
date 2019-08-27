const API_KEY = 'pk.eyJ1Ijoic25ld2IiLCJhIjoiY2p2cHNmMG5pMDAwczQ4cnhva3loeXVpbyJ9.KhEIUGLHoHGy2GvWHTfDjw';

// API_KEY is stored in config.js file

// Query URL
var URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';




var boundary = new L.LayerGroup();

function check() {
    console.log(this._latlng.lat);
}


function dataMap(){
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
    });


    var myMap = L.map('map', {
        center: [
            37.5407, -77.4360
        ],
        zoom: 13,
        layers: [streetmap]
    });

    L.marker([37.5599, -77.4737]).addTo(myMap)
		.bindPopup("<b>Bandito's Burrito Lounge</b><br />Margaritas and Tacos.").on("click", check);

        

}

dataMap();

