var mymap = L.map('mapid').setView([37.405, -119.312], 6);
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 6,
}).addTo(mymap);

var commHillMarker = L.marker([37.29464, -121.86944]).addTo(mymap); //459 Mill Pond Drive, San Jose, CA
var bevHillsMarker = L.marker([34.08536, -118.40769]).addTo(mymap); //901 North Alpine Drive, Beverly Hills, CA