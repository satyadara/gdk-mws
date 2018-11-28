let lokasi = [-7.800063, 110.400512];
let sponsor = "Tempat tinggal dong";

let places = [
    {
        'lokasi': [-7.798620, 110.402913],
        'sponsor': 'Jalan Depan JEC'
    },
    {
        'lokasi': [-7.800063, 110.400512],
        'sponsor': "Tempat tinggal dong"
    },
    {
        'lokasi': [-7.800131, 110.400200],
        'sponsor': "Burjoan"
    },
    {
        'lokasi': [-7.800401, 110.400569],
        'sponsor': "Laundry"
    },
    {
        'lokasi': [-7.799065, 110.404085],
        'sponsor': "Halaman JEC"
    }
]

let mymap = L.map('mapid').setView(lokasi, 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https:// www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2F0eWFkYXJhIiwiYSI6ImNqbnIwaGQ5bTAzOWkzd3BoYnFqZ3hzbWkifQ.KbDWP-OMzNcyPO-_FFP0HQ'
}).addTo(mymap);

for (let i = 0; i < 5; i++) {
    L.marker(places[i].lokasi)
        .addTo(mymap)
        .bindPopup(places[i].sponsor);
}
