var mymap = L.map('mapid').setView([37.5337, -122.1886], 9);
// var mymap = L.map('mapid').setView([37.5337, -122.1089], 10);
// var mymap = L.map('mapid').setView([37.405, -119.312], 6);
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 9,
}).addTo(mymap);

// let houses = [];

var newportFremont = L.marker([37.52173340285854, -121.95279523730277]).addTo(mymap); // 42760 Newport Drive, Fremont
// houses.push(newportFremont)
var fremontMarker = L.marker([37.520078329568555, -121.97832852602005]).addTo(mymap); // 4938 Tenor Court, Fremont
var newarkMarker = L.marker([37.542459128973334, -122.05186665058136]).addTo(mymap); // 6792 Normandy Drive, Newark
var commHillMarker = L.marker([37.29464, -121.86944]).addTo(mymap); //459 Mill Pond Drive, San Jose
var mountainViewMarker = L.marker([37.38823233059973, -122.07724034786224]).addTo(mymap); // 528 Anza Street, Mountain View
var mpMarker = L.marker([37.43661552052338, -122.21090957522391]).addTo(mymap); // 2087 Mills Avenue, Menlo Park


newportFremont.bindPopup("<b>Move here!</b><br>Irvington District<br>Fremont, CA");
fremontMarker.bindPopup("<b>Move here!</b><br> Fremont, CA");
newarkMarker.bindPopup("<b>Move here!</b><br>Newark, CA");
mountainViewMarker.bindPopup("<b>Move here!</b><br> Mountain View, CA");
commHillMarker.bindPopup("<b>Move here!</b><br>Communications Hill, <br> San Jose, CA");
mpMarker.bindPopup("<b>Move here!</b><br>Menlo Park, CA")



//later for making code dynamic
// newportFremont.addEventListener("click", () => {
//   console.log('hello');
//   // console.log(houses);
// })

// let modalBtn = document.getElementById("modal-btn");
// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".close-btn");

// modalBtn.onclick = function(){
//   modal.style.display = "block";
// };

// closeBtn.onclick = function(){
//   modal.style.display = "none";
// };

// window.onclick = function(e){
//   if(e.target == modal){
//     modal.style.display = "none"
//   }
// };