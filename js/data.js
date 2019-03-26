// Recuperation des infos de L'API JCDecaux et mise en forme
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=7002c71d83d21668d83abaf4ae6f36bdaaa6ab55", function (reponse){
    var datas = JSON.parse(reponse); // Transformation de la reponse en tableau JS
    datas.forEach(function (data){ // Boucle sur chaque station

      // Creation des objets Station
      var stationObj = new Station(data.name, data.status, data.available_bike_stands, data.available_bikes, data.position, data.number);


      mapObj.displayMarker(stationObj);
      mapObj.allListenerMap(stationObj);

    });
});
