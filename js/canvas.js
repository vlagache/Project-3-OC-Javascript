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
    this.canvasX = 0;
    this.canvasY = 0;
    this.canvasNotEmpty = 0;
  }

  draw(e){
      //this.mouseCanvas(e);
      this.drawActive = 1;
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#15965f";
      this.ctx.lineWidth=1.5;
      this.ctx.lineJoin='round'
      this.ctx.lineCap='round';
      this.ctx.moveTo(this.canvasX,this.canvasY);
  }
  stopDraw(){
    this.drawActive = 0;
  }
  moveDraw(e){
    //this.mouseCanvas(e);
    if(this.drawActive == 1){
      this.ctx.lineTo(this.canvasX,this.canvasY);
      this.ctx.stroke();
      this.canvasNotEmpty=1;
    }
  }
  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
 mouseCanvas(e){
    var rect = this.canvas.getBoundingClientRect();
    this.canvasX = e.clientX - rect.left;
    this.canvasY = e.clientY - rect.top;
  }

  touchCanvas(e){
    var rect = this.canvas.getBoundingClientRect();
    this.canvasX = e.touches[0].clientX - rect.left;
    this.canvasY = e.touches[0].clientY - rect.top;
  }
  alertCanvasEmpty(){
    if(this.canvasNotEmpty == 0){
          this.ctx.strokeStyle = "red";
          this.ctx.font = "normal 12px Quicksand";
          this.ctx.strokeText("Signature requise pour lancer la réservation", 9, 75);
          setTimeout ( () =>{
            this.clear();
        },2500);
    }
  }

};
