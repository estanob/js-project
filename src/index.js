var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 18,
  // minZoom: 10,
  // id: 'mapbox/streets-v11',
  // tileSize: 512,
  // zoomOffset: -1,
  // accessToken: 'your.mapbox.access.token'
}).addTo(mymap);