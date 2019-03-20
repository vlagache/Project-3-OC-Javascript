// Variables
// Diapo
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

var arrow_right = document.getElementById("arrow_right");
var arrow_left = document.getElementById("arrow_left");
var pause = document.getElementById("pause");
var play = document.getElementById("play");
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
