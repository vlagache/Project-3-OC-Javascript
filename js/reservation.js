class Reservation{
  constructor(nameStation,nom,prenom){
    this.nameStation = nameStation;
    this.nom = nom;
    this.prenom = prenom;
  }
display(){
    noReservationElt.style.display="none";
    reservationElt.style.display="block";
    timerElt.style.display="block";

    statioNameElt.textContent = this.nameStation;
    nomResaElt.textContent = this.nom;
    prenomResaElt.textContent = this.prenom;
    this.saveResa();
}
saveResa(){
  localStorage.setItem("nomSaveResa", this.nom);
  localStorage.setItem("prenomSaveResa", this.prenom);
  sessionStorage.setItem("nomStationSaveResa", this.nameStation);
}
};
