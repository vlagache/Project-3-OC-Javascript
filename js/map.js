class Leafletmap{
  constructor(mapLat,mapLng,mapZoom,nameMap,id){
    this.mapLat = mapLat; // Latitude
    this.mapLng = mapLng; // Longitude
    this.mapZoom = mapZoom; // Niveau de zoom
    this.nameMap = nameMap; // nom de la Map
    this.id = id; // id de la div dans le HTML ou la map sera affiché
    var marker; //
  }

  displayMap(){
    this.nameMap = L.map(this.id).setView([this.mapLat,this.mapLng], this.mapZoom);

    //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //maxZoom: 18,
    //  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    //    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //  id: 'mapbox.streets',
    // accessToken: 'pk.eyJ1IjoidmxhZ2FjaGUiLCJhIjoiY2pydG5ncXY1MG1xNTQ5bnBmbzNyZWhibiJ9.CnU0NPKEoINoyB-PEIPOmw'
    //}).addTo(this.nameMap);
  
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: 'mapbox/streets-v12',
        accessToken: 'pk.eyJ1IjoidmxhZ2FjaGUiLCJhIjoiY2pydG5ncXY1MG1xNTQ5bnBmbzNyZWhibiJ9.CnU0NPKEoINoyB-PEIPOmw'
    }).addTo(this.nameMap);
  }
  // Changement de couleur du marker en fonction du nombre de vélos dispo & ajout du marker sur la carte pour chaque station
  displayMarker(stationObj){
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

    if (stationObj.status === 'CLOSED') {
      this.marker = L.marker([stationObj.position.lat, stationObj.position.lng], {icon:markerBlack}).addTo(this.nameMap);
    } else if (stationObj.status === 'OPEN') {
      if (stationObj.available_bikes > 0) {
          this.marker = L.marker([stationObj.position.lat, stationObj.position.lng], {icon:markerGreen}).addTo(this.nameMap);
      } else if (stationObj.available_bikes <= 0) {
        this.marker = L.marker([stationObj.position.lat, stationObj.position.lng], {icon:markerRed}).addTo(this.nameMap);
      }
    };
  }
  // Affichage du popup au dessus du marker
  displayPopup(stationObj){
    var popup = L.popup({className:"popup"});
    popup
      .setLatLng([stationObj.position.lat,stationObj.position.lng])
      .setContent(stationObj.name)
      .openOn(this.nameMap);
  }
  allListenerMap(stationObj){
    let myobj = this;
    this.marker.addEventListener("click",function(){
      
      myobj.displayPopup(stationObj);
      myobj.nameMap.setView([stationObj.position.lat, stationObj.position.lng],16);

      noInfoStationElt.style.display="none";
      infoStationElt.style.display= "block";
      blocCanvasElt.style.display="none";
      canvasObj.clear();

      stationObj.display();

      infoStationElt.scrollIntoView();
    })
  }




};
