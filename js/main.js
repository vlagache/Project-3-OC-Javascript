///////////////////////////////////////// Chargement de la page
// Si on a enregistré un nom de Station pour une reservation au chargement de la page , on affiche les infos enregistrés Station , nom & prenom
window.addEventListener("load", function(){
  // Afichage du nom & prenom dans le formulaire enregistré en localStorage.
  nomFormElt.value = localStorage.getItem("nomSaveResa");
  prenomFormElt.value = localStorage.getItem("prenomSaveResa");
  //sessionStorage.clear();localStorage.clear();
  if ( sessionStorage.getItem("nomStationSaveResa") != null ){

    noInfoStationElt.style.display="none";
    noReservationElt.style.display="none";
    reservationElt.style.display="block";
    timerElt.style.display="block";
    deleteResaElt.style.display="block";
    messageElt.style.display = "none";
    statioNameElt.textContent = sessionStorage.getItem("nomStationSaveResa");
    nomResaElt.textContent = localStorage.getItem("nomSaveResa");
    prenomResaElt.textContent = localStorage.getItem("prenomSaveResa");

    let min = sessionStorage.getItem("minSaveResa");
    let sec = sessionStorage.getItem("secSaveResa");

    timerObj = new Timer(min,sec);
    timerObj.countdown();
    canvasObj.clear();
  }
});
/* ================================= MAP ===========================================*/
var mapObj = new Leafletmap(53.346497, -6.246155, 14, 'mymap', 'mapid');
mapObj.displayMap();

/* ================================= DIAPORAMA ==================================== */
var diapoObj = new Diaporama(sliders);
diapoObj.contentSlider();
diapoObj.autoSlider();
diapoObj.allListenerDiapo()
/* ================================= INFO STATION  =================================== */
///////////////////////////////////////// Canvas
var canvasObj = new Canvas();
canvasObj.allListenerCanvas();
///////////////////////////////////////// Bouton Confirmation Bloc infos
form.addEventListener("submit", function(e){
  e.preventDefault();
  blocCanvasElt.style.display="block";
  infoStationElt.style.display="none";
  stationNameCanvasElt.textContent = document.getElementById("name").textContent;
  nomCanvasElt.textContent = form.elements.nom.value;
  prenomCanvasElt.textContent = form.elements.prenom.value;
});
///////////////////////////////////////// Bouton fermer bloc Infos
button_close.addEventListener("click", function(e) {
  e.preventDefault();
  infoStationElt.style.display= "none";
});
///////////////////////////////////////// Bouton Reservation Canvas
button_reservation.addEventListener("click", function(e) {
  messageElt.style.display = "none";
    canvasObj.clear(); // Clear la zone de canvas pour eviter la superposition des messages d'erreur en cas de non signature
  if ( canvasObj.canvasNotEmpty == 0 ){
     // Verifie si l'utilisateur à bien signé avant de lancer la résa.
    canvasObj.alertCanvasEmpty();
  } else {
    if ( timerObj != null ){ // Verifie si un chrono est deja lancé et l'arrete pour pas avoir 2 chrono tournant en meme temps
      timerObj.clearCountdown();
    }
    var resaObj = new Reservation(document.getElementById("name").textContent, form.elements.nom.value, form.elements.prenom.value);
    timerObj = new Timer(20,0);
    // Affichage du nom de la station & lancement du timer
    resaObj.display();
    timerObj.countdown();
    blocCanvasElt.style.display="none";
    deleteResaElt.style.display="block";
    canvasObj.clear(); // clear la zone de canvas pour ne pas avoir l'affichage d'une ancienne signature lors d'une nouvelle reservation.
    canvasObj.canvasNotEmpty = 0;
  };
});
///////////////////////////////////////// Bouton Fermer Bloc Canvas
button_closeCanvas.addEventListener("click",function(){
  blocCanvasElt.style.display="none";
  infoStationElt.style.display="block";
  canvasObj.clear();
})
/////////////////////////////////////// Bouton Clear Bloc CANVAS
button_clearCanvas.addEventListener("click",function(){
  canvasObj.clear();
  canvasObj.canvasNotEmpty = 0;
});
/////////////////////////////////////// Bouton Annuler reservation
deleteResaElt.addEventListener("click",function(){
  sessionStorage.removeItem("minSaveResa");
  sessionStorage.removeItem("secSaveResa");
  sessionStorage.removeItem("nomStationSaveResa");
  noInfoStationElt.style.display="block";
  reservationElt.style.display="none";
  messageElt.style.display="block";
  timerElt.style.display = "none";
  deleteResaElt.style.display="none";
})
