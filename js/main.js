/* ================================= DIAPORAMA ==================================== */

var sliders = [
    {
        image: "images/slide1.jpg",
        text: 'Bienvenue sur le site de <span style="color: #15965f; font-weight:bold;">DublinBikes</span> . Avec cette animation vous allez decouvrir le fonctionnement de notre site. Vous pouvez arreter cette animation à tout moment avec le bouton pause'
    },
    {
        image: "images/slide2.jpg",
        text: 'Choisissez votre station sur la <span style="color: #15965f; font-weight:bold;"> carte </span> ci-dessous <br/><br/><img src=images/marker-icon-green.png> Vélo(s) disponible(s) <br/> <img src=images/marker-icon-red.png> Pas de vélos disponibles </br> <img src=images/marker-icon-black.png> Station fermée '
    },
    {
        image: "images/slide3.jpg",
        text: ' Aprés avoir choisi votre station , il nous faudra une simple signature avec votre souris dans la zone prévue à cet effet et votre vélo sera réservé pendant <span style="color: #15965f; font-weight:bold;"> 20 minutes ! </span> Vous ne pouvez réserver qu&#8217;un vélo à la fois.<span style="color: #15965f; font-weight:bold;"> Tout nouvelle réservation annule la précédente </span>. Pour annuler une réservation il vous suffira de cliquer sur la croix se trouvant à coté de vos informations de réservation.<span style="color: #15965f; font-weight:bold;"> A l&#8217;issue de ces 20 minutes votre réservation sera annulée .</span>'
    }
];


var diapoObj = new Diaporama(sliders);
diapoObj.contentSlider();
var intervalSlider =  setInterval(diapoObj.nextSlide.bind(diapoObj), 5000); // Defilement automatique des slide


// Next Button
var arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", function() {
 diapoObj.nextSlide();
});

// Previous Button
var arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function() {
  diapoObj.previousSlide();
});

// Pause Button
var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
  clearInterval(intervalSlider);
  document.getElementById("pause").style.display= "none";
  document.getElementById("play").style.display= "block";
});

// Play Button
var play = document.getElementById("play");
play.addEventListener("click", function() {
  intervalSlider =  setInterval(diapoObj.nextSlide.bind(diapoObj), 5000);
  document.getElementById("pause").style.display= "block";
  document.getElementById("play").style.display= "none";
});

// Arrow navigation
document.addEventListener("keydown", function(e){
  if ( e.keyCode === 37 ){
    diapoObj.previousSlide();
  }
});

document.addEventListener("keydown", function(e){
  if ( e.keyCode === 39 ){
    diapoObj.nextSlide();
  }
});


/* ================================= INFO STATION  =================================== */
// Variables
// Bloc noInfo
var noInfoStationElt = document.getElementById("noInfoStation");
// Bloc Infos
var infoStationElt = document.getElementById("info_station");
var form = document.querySelector("form");
var nomFormElt = document.getElementById("nom");
var prenomFormElt = document.getElementById("prenom");
var warningElt = document.getElementById("warning");
var errorMsgElt = document.getElementById("errorMsg");
var button_confirmation = document.getElementById("button_confirmation");
var button_close = document.getElementById("button_close");

// Bloc Canvas
var blocCanvasElt = document.getElementById("bloc_canvas");
var stationNameCanvasElt = document.getElementById("stationNameCanvas");
var nomCanvasElt = document.getElementById("nomCanvas");
var prenomCanvasElt = document.getElementById("prenomCanvas");
var button_reservation = document.getElementById("button_reservation");
var button_closeCanvas = document.getElementById("button_closeCanvas");
var button_clearCanvas = document.getElementById("button_clearCanvas");

//Bloc Resa
var noReservationElt = document.getElementById("noReservation");
var reservationElt = document.getElementById("reservation");
var statioNameElt = document.getElementById("stationName");
var nomResaElt = document.getElementById("nomResa");
var prenomResaElt = document.getElementById("prenomResa");
var timerElt = document.getElementById("timer");
var minElt = document.getElementById("min");
var secElt = document.getElementById("sec");
var messageElt = document.getElementById("message");
var deleteResaElt = document.getElementById("deleteResa");

var timerObj = null;


///////////////////////////////////////// Canvas
var canvasObj = new Canvas();

canvas.addEventListener("mousedown",function(e){
  canvasObj.draw(e);
});

canvas.addEventListener("mouseup",function(e){
canvasObj.stopDraw();
});

canvas.addEventListener("mousemove",function(e){
  canvasObj.moveDraw(e);

});
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
    //mymap.closePopup();
  };
});

///////////////////////////////////////// Bouton Fermer Canvas

button_closeCanvas.addEventListener("click",function(){
  blocCanvasElt.style.display="none";
  infoStationElt.style.display="block";
  canvasObj.clear();

})

/////////////////////////////////////// Bouton Clear CANVAS

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

///////////////////////////////////////// Affichage des valeurs nom&prenom dans les cases du formulaire

// Afichage du nom & prenom dans le formulaire enregistré en localStorage.
nomFormElt.value = localStorage.getItem("nomSaveResa");
prenomFormElt.value = localStorage.getItem("prenomSaveResa");

///////////////////////////////////////// Chargement de la page

// Si on a enregistré un nom de Station pour une reservation au chargement de la page , on affiche les infos enregistrés Station , nom & prenom

window.addEventListener("load", function(){
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
