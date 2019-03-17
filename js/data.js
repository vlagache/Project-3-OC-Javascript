
var stationObjs = []; // Creation d'un tableau vide qui va contenir tout les obj Station.
var id = 0;

// Recuperation des infos de L'API JCDecaux et mise en forme
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=7002c71d83d21668d83abaf4ae6f36bdaaa6ab55", function (reponse){
    var listStations = JSON.parse(reponse); // On transforme l'objet JSON en tableau Javascript
    listStations.forEach(function (station){ // Boucle sur chaque station
      // Creation des objets Station
      var stationObj = new Station(station.name, station.status, station.available_bike_stands, station.available_bikes, station.last_update, station.position, station.number);

      stationObjs.push(stationObj); // tu mets l'objets Station dans un tableau

      // Changement de couleur du marker en fonction du nombre de vélos dispo & ajout du marker sur la carte pour chaque station

      if (station.status === 'CLOSED') {
        var marker = L.marker([station.position.lat, station.position.lng], {icon:markerBlack, stationId: id}).addTo(mymap);
      } else if (station.status === 'OPEN') {
        if (station.available_bikes > 0) {
            var marker = L.marker([station.position.lat, station.position.lng], {icon:markerGreen, stationId: id}).addTo(mymap);
        } else if (station.available_bikes <= 0) {
          var marker = L.marker([station.position.lat, station.position.lng], {icon:markerRed, stationId: id}).addTo(mymap);
        }
      };

      id++;

      // Listener sur le click des marqueurs
      marker.addEventListener("click", function() {
        displayPopupMarker(stationObjs[this.options.stationId]);
        // Centrer et zoom sur le marker séléctionné
        mymap.setView([station.position.lat, station.position.lng],16);
        // Test Refresh
        // stationObj.refreshData(stationObjs[this.options.stationId]);
        infoStationElt.style.display= "block";
        blocCanvasElt.style.visibility="hidden";
        canvasObj.clear();

        test(stationObjs[this.options.stationId]);
      });
    });
});
