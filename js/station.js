
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
        infoStationElt.style.borderColor = "red";
        warningElt.style.display="inline-block";
        errorMsgElt.style.display="block";
        button_confirmation.style.visibility="hidden";

        if ( screen.width <= 450 ){
          button_close.style.left="-11%";
        } else if ( screen.witdh <= 850 ){
          button_close.style.left="-6%";
        } else if ( screen.witdh <= 1000 ){
          button_close.style.left="5%";
        } else {
         button_close.style.left="14%";
       }

        if ( this.available_bikes <=0){
           errorMsgElt.textContent = "Il n'y a plus de vélos disponibles à cette station , Réservation impossible !";
        }
        if (this.status === "CLOSED"){
            errorMsgElt.textContent = "Cette station est temporairement fermée , Réservation impossible !";
        }
        if (sessionStorage.getItem("nomStationSaveResa") !=null ){
          errorMsgElt.textContent = "Vous avez deja une réservation en cours, annulez la avant d'en faire une nouvelle !";
        }
      } else {
        warningElt.style.display="none";
        errorMsgElt.style.display="none";
        button_confirmation.style.visibility="visible";
        infoStationElt.style.borderColor = "#15965f"

        if ( screen.width <= 450){
          button_close.style.left="12%";
        } else if ( screen.witdh <= 1000 ){
          button_close.style.left="30%";
        } else {
         button_close.style.left="40%";
       }
    }
      // Affichage des infos
      document.getElementById("name").textContent = this.name;
      document.getElementById("status").textContent = statusTraduction;
      document.getElementById("availableBikeStands").textContent = this.available_bike_stands;
      document.getElementById("availableBikes").textContent = this.available_bikes;
  }
};
