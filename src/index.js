var mymap = L.map('mapid').setView([
  37.5337, -122.1886
], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(mymap);

var newportFremont = L.marker([
  37.52173340285854, -121.95279523730277
])
  .addTo(mymap); // 42760 Newport Drive, Fremont

var fremontMarker = L.marker([
  37.520078329568555, -121.97832852602005
])
  .addTo(mymap); // 4938 Tenor Court, Fremont

var newarkMarker = L.marker([
  37.542459128973334, -122.05186665058136
])
  .addTo(mymap); // 6792 Normandy Drive, Newark

var commHillMarker = L.marker([
  37.29464, -121.86944
])
  .addTo(mymap); //459 Mill Pond Drive, San Jose

var mountainViewMarker = L.marker([
  37.38823233059973, -122.07724034786224
])
  .addTo(mymap); // 528 Anza Street, Mountain View

var mpMarker = L.marker([
  37.43661552052338, -122.21090957522391
])
  .addTo(mymap); // 2087 Mills Avenue, Menlo Park


newportFremont.bindPopup(
  "<b>Move here!</b><br>Irvington District<br>Fremont, CA"
);
fremontMarker.bindPopup("<b>Move here!</b><br> Fremont, CA");
newarkMarker.bindPopup("<b>Move here!</b><br>Newark, CA");
mountainViewMarker.bindPopup("<b>Move here!</b><br> Mountain View, CA");
commHillMarker.bindPopup(
  "<b>Move here!</b><br>Communications Hill, <br> San Jose, CA"
);
mpMarker.bindPopup("<b>Move here!</b><br>Menlo Park, CA")

var losAngelesMap = L.map('losangelesmap').setView([
  33.95871283442466, -118.3094055656509
], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(losAngelesMap);

var sanDiegoMap = L.map('sdmap').setView([
  32.723348633228696, -117.11090874710843
], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(sanDiegoMap);

var sacMap = L.map('sacmap').setView([
  38.540640585229696, -121.41487712242126
], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(sacMap);

var northMap = L.map('northmap').setView([
  40.79548197675195, -124.1593133864593
], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(northMap);

var centralMap = L.map('centralcoastmap').setView([
  34.76864965410546,-120.24831571578979
], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(centralMap);
