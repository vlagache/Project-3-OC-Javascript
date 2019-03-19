// Declaration des icones marker Leaflet
 var markerGreen = L.icon({
     iconUrl: 'images/marker-icon-green.png',
     iconSize: [25, 41],
     iconAnchor: [12, 41],
 });
 var markerRed = L.icon({
     iconUrl: 'images/marker-icon-red.png',
     iconSize: [25, 41],
     iconAnchor: [12, 41],
 });
 var markerBlack = L.icon({
     iconUrl: 'images/marker-icon-black.png',
     iconSize: [25, 41],
     iconAnchor: [12, 41],
 });

// Creation de la map
 var mymap = L.map('mapid').setView([53.346497, -6.246155], 14);

// Creation et affichage du popup sur chaque marker.
 	var popup = L.popup({className:"popup"});
 	function displayPopupMarker(station) {
    popup
      .setLatLng([station.position.lat,station.position.lng])
 			.setContent(station.name)
 			.openOn(mymap);
 	}
// Ajout du layer
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmxhZ2FjaGUiLCJhIjoiY2pydG5ncXY1MG1xNTQ5bnBmbzNyZWhibiJ9.CnU0NPKEoINoyB-PEIPOmw', {
   maxZoom: 18,
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   id: 'mapbox.streets'
 }).addTo(mymap);
