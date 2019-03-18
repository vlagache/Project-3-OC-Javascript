
// Class Station & Methodes
class Station {
  constructor(name, status, available_bike_stands, available_bikes, position, number){
    this.name = name;
    this.status = status;
    this.available_bike_stands = available_bike_stands;
    this.available_bikes = available_bikes;
    this.position = position;
    this.number = number;
  }
  display() {
    // Traduction Statut et changement de couleur de l'etat
    var statusTraduction = "";
    switch(this.status){
    case "OPEN" :
      statusTraduction = " Ouverte ";
      document.getElementById("status").style.color= "#15965f";
      break;
    case "CLOSED" :
      document.getElementById("status").style.color= "red";
      statusTraduction = " Fermée ";
      break;
    };

    // Affiche un message d'erreur et desactive le bouton confirmer en cas de station vide ou fermée ou resa deja en cours, icone erreur , et bordure rouge
    if (this.status === "CLOSED" || this.available_bikes <=0 || sessionStorage.getItem("nomStationSaveResa") !=null ){
      warningElt.style.display="inline-block";
      errorMsgElt.style.display="block";
      button_confirmation.style.visibility="hidden";
      button_close.style.left="14%";
      if (this.status === "CLOSED"){
        console.log("TEST FERMEE AFFICHAGE ");
          errorMsgElt.textContent = "Cette station est temporairement fermée , Réservation impossible !";
          infoStationElt.style.borderColor = "red";
      }
      if ( this.available_bikes <=0){
          errorMsgElt.textContent = "Il n'y a plus de vélos disponibles à cette station , Réservation impossible !";
          infoStationElt.style.borderColor = "red";
      }
      if (sessionStorage.getItem("nomStationSaveResa") !=null ){
        errorMsgElt.textContent = "Vous avez deja une réservation en cours, annulez la avant d'en faire une nouvelle !";
        infoStationElt.style.borderColor = "red";
      }
    } else {
      warningElt.style.display="none";
      errorMsgElt.style.display="none";
      button_confirmation.style.visibility="visible";
      button_close.style.left="30%";
      infoStationElt.style.borderColor = "#15965f"
    }
    // Affichage des infos
    document.getElementById("name").textContent = this.name;
    document.getElementById("status").textContent = statusTraduction;
    document.getElementById("availableBikeStands").textContent = this.available_bike_stands;
    document.getElementById("availableBikes").textContent = this.available_bikes;
  }
  refreshData(station) {
    ajaxGet("https://api.jcdecaux.com/vls/v1/stations/"+station.number+"?contract=Dublin&apiKey=7002c71d83d21668d83abaf4ae6f36bdaaa6ab55", function (reponse){
      var stationRefresh = JSON.parse(reponse);
      console.log(stationRefresh.name);
      console.log(station.name);
    });
  }
};
function test(station){
 // tu récupère l'objet station à partir de la clé
  station.display();
};
