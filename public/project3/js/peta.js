let lokasi = [-7.800063, 110.400512];
let mymap = L.map('mapid').setView(lokasi, 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https:// www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2F0eWFkYXJhIiwiYSI6ImNqbnIwaGQ5bTAzOWkzd3BoYnFqZ3hzbWkifQ.KbDWP-OMzNcyPO-_FFP0HQ'
}).addTo(mymap);

function findLocation(x, y) {
    // console.log(x,y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x &&
            places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
        img.width = 300
        img.height = 300
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

async function f(url) {
    try {
        const resp = await (fetch(url));
        const resp2 = await resp.json();
        localStorage.setItem('places', JSON.stringify(resp2.places));

    }
    catch (err) {
        console.log(err);
    }
}

const URL = "data/peta.json";
f(URL)
// fetch(URL)
//     .then(function (response) {
//         if (response.status !== 200) { //HTTP Status
//             console.log('Ada masalah. Status Code: ' +
//                 response.status);
//             throw response.statusText;
//         }
//         return response.json()
//     })
//     .then(resp => {
//         let places = resp.places;
//         console.log(places)
//         localStorage.setItem('places', JSON.stringify(resp.places));
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

let places = JSON.parse(localStorage.getItem('places'));
for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
        .bindPopup(p.sponsor);
    marker.on('click', showLocation);
}
