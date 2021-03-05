var mymap = L.map('mapid').setView([37.405, -119.312], 6);
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 19,
  minZoom: 6,
}).addTo(mymap);

// let houses = [];

//Bay Area Houses
var newportFremont = L.marker([37.52173340285854, -121.95279523730277]).addTo(mymap); // 42760 Newport Drive, Fremont
// houses.push(newportFremont)
// var fremontMarker = L.marker([37.520078329568555, -121.97832852602005]).addTo(mymap); // 4938 Tenor Court, Fremont
// var newarkMarker = L.marker([37.542459128973334, -122.05186665058136]).addTo(mymap); // 6792 Normandy Drive, Newark
// var commHillMarker = L.marker([37.29464, -121.86944]).addTo(mymap); //459 Mill Pond Drive, San Jose
// var mountainViewMarker = L.marker([37.38823233059973, -122.07724034786224]).addTo(mymap); // 528 Anza Street, Mountain View
// var mpMarker = L.marker([37.43661552052338, -122.21090957522391]).addTo(mymap); // 2087 Mills Avenue, Menlo Park

// var sacMarker = L.marker([38.582779860996496, -121.44531458616257]).addTo(mymap); // 4001 Breuner Avenue, Sacramento
// var bevHillsMarker = L.marker([34.08536, -118.40769]).addTo(mymap); //901 North Alpine Drive, Beverly Hills
// var sanDiegoMarker = L.marker([32.75702, -117.14421]).addTo(mymap); //1929 Meade Avenue, San Diego
// var eurekaMarker = L.marker([40.78640471064689, -124.16382193565367]).addTo(mymap); //2338 F Street, Eureka
// var bakersfieldMarker = L.marker([35.31756877279323, -119.13294464349747]).addTo(mymap); // 11809 Brentmoor Circle, Bakersfield

//Bay Area Markers
newportFremont.bindPopup("<b>Move here!</b><br>Irvington District<br>Fremont, CA");
// fremontMarker.bindPopup("<b>Move here!</b><br> Fremont, CA");
// newarkMarker.bindPopup("<b>Move here!</b><br>Newark, CA");
// mountainViewMarker.bindPopup("<b>Move here!</b><br> Mountain View, CA");
// commHillMarker.bindPopup("<b>Move here!</b><br>Communications Hill, <br> San Jose, CA");
// mpMarker.bindPopup("<b>Move here!</b><br>Menlo Park, CA")

// bevHillsMarker.bindPopup("<b>Move here!</b><br>Beverly Hills, CA");
// sanDiegoMarker.bindPopup("<b>Move here!</b><br>San Diego, CA");
// eurekaMarker.bindPopup("<b>Move here!</b><br>Eureka, CA");
// bakersfieldMarker.bindPopup("<b>Move here!</b><br>Bakersfield, CA");


//later for making code dynamic
newportFremont.addEventListener("click", () => {
  console.log('hello');
  // console.log(houses);
})

let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

modalBtn.onclick = function(){
  modal.style.display = "block";
};

closeBtn.onclick = function(){
  modal.style.display = "none";
};

window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
};