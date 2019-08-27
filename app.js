// vmfa
// toast
// greenleafs
// sugar and twine
// belle isle
// hollywood cemetery 
// pipeline
// bandy field
// pony pasture

const blurbInfo = {
    37.5599 : ["Bandito's Bar and Lounge", 
                "Seth's favorite place to get tacos and margaritas.  Awesome punk bar in a small bar district called Devil's Triangle.",
                "<a href='http://banditosburritolounge.com/' target='_blank'>Bandito's Website</a>"],
    37.5593 : ["Chiocca's",
                "Cool little bar and deli in the basement of a house.  One time Seth fell asleep in the alley behind it and Zoe freaked out because she couldn't find him.",
                "<a href='http://places.singleplatform.com/chioccas/menu?ref=google' target='_blank'>Chiocca's Menu</a>"],
    37.5560 : ["VMFA",
                "The Virginia Museum of Fine Arts.  Open every day of the year with free admission to normal exhibits!  On Friday there is happy hour on the lawn.  Get some wine and chill.",
                "<a href='https://www.vmfa.museum/' target='_blank'>VMFA website</a>"],
    37.5289 : ["Belle Isle",
                "Hiking, fishing, swimming, and drinking. This place is awesome to waste the day at.  Bring a towel and find a rock.",
                ""],
}


const API_KEY = 'pk.eyJ1Ijoic25ld2IiLCJhIjoiY2p2cHNmMG5pMDAwczQ4cnhva3loeXVpbyJ9.KhEIUGLHoHGy2GvWHTfDjw';



var boundary = new L.LayerGroup();

function showBlurb() {

    document.getElementById("locationName").innerText = blurbInfo[this._latlng.lat][0];
    document.getElementById("locationBlurb").innerText = blurbInfo[this._latlng.lat][1];
    document.getElementById("locationWebsite").innerHTML = blurbInfo[this._latlng.lat][2];
}


function dataMap(){
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
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
    

    var locations = [
		["Bandito's", 37.5599, -77.4737],
		["Chiocca's", 37.5593, -77.4762],
		["VMFA", 37.5560, -77.474],
        ["Belle Isle", 37.5289, -77.4526],
        
		];

        
    locations.forEach(el => {
        marker = new L.marker([el[1], el[2]])
				.bindPopup(el[0])
                .addTo(myMap)
                .on("click", showBlurb);
    })
        

}

dataMap();



