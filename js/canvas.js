/*
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var drawActive = 0; // Interrupteur click souris pour le dessin
var mouseCanvasX = 0;
var mouseCanvasY = 0;

canvas.width = 300;
canvas.height = 150;



rect = canvas.getBoundingClientRect(); // Renvoie la position relative du canvas par rapport à la zone d'affichage
// Gestion du clic souris

draw();

function draw(){
  canvas.addEventListener("mousedown", function(e) {
    mousePosition(e);
    drawActive = 1;
    ctx.beginPath();
    ctx.strokeStyle = "#15965f";
    ctx.lineWidth=1.5;
    ctx.lineJoin='round'
    ctx.lineCap='round';
    ctx.moveTo(mouseCanvasX,mouseCanvasY);

  })

  canvas.addEventListener("mouseup", function() {
    drawActive = 0;
  })

  canvas.addEventListener("mousemove", function(e){
   mousePosition(e);
    if(drawActive == 1){
      ctx.lineTo(mouseCanvasX,mouseCanvasY);
      ctx.stroke();
    }
  });
};

function mousePosition(e){
  mouseCanvasX = e.clientX - rect.left;
  mouseCanvasY = e.clientY - rect.top;
}
*/

class Canvas{
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawActive = 0;
    this.mouseCanvasX = 0;
    this.mouseCanvasY = 0;
    this.canvasNotEmpty = 0;
  }

  draw(e){
      this.clear();
      this.mouseCanvas(e);
      this.drawActive = 1;
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#15965f";
      this.ctx.lineWidth=1.5;
      this.ctx.lineJoin='round'
      this.ctx.lineCap='round';
      this.ctx.moveTo(this.mouseCanvasX,this.mouseCanvasY);
  }
  stopDraw(){
    this.drawActive = 0;
  }
  moveDraw(e){
    this.mouseCanvas(e);
    if(this.drawActive == 1){
      this.ctx.lineTo(this.mouseCanvasX,this.mouseCanvasY);
      this.ctx.stroke();
      this.canvasNotEmpty=1;
    }
  }
  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
 mouseCanvas(e){
    var rect = this.canvas.getBoundingClientRect();
    this.mouseCanvasX = e.clientX - rect.left;
    this.mouseCanvasY = e.clientY - rect.top;
  };
  alertCanvasEmpty(){

    if(this.canvasNotEmpty == 0){

        if ( sessionStorage.getItem("nomStationSaveResa") != null ){ // Si une reservation est deja lancé
          this.ctx.strokeStyle = "#15965f";
          this.ctx.font = "normal 14px Quicksand";
          this.ctx.strokeText("Signature requise pour lancer la réservation", 9, 75);
          } else {
          this.ctx.strokeStyle = "#15965f";
          this.ctx.font = "normal 14px Quicksand";
          this.ctx.strokeText("Vous n'avez pas signé", 70, 75);
          noReservationElt.textContent="Nous avons besoin de votre signature pour lancer la réservation";
          noReservationElt.style.display="block";
        }
    }
  }

};
