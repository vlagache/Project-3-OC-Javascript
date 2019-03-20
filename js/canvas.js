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
  allListenerCanvas(){
    let myobj = this;
    this.canvas.addEventListener("mousedown",function(e){
        myobj.mouseCanvas(e);
        myobj.draw(e);
    });
    this.canvas.addEventListener("mouseup",function(){
        myobj.stopDraw();
    });
    this.canvas.addEventListener("mousemove",function(e){
        myobj.mouseCanvas(e);
        myobj.moveDraw(e);
    });
    this.canvas.addEventListener("touchstart", function (e) {
        myobj.touchCanvas(e);
        myobj.draw(e);
    });
    this.canvas.addEventListener("touchend", function (e) {
        myobj.stopDraw();
    });
    this.canvas.addEventListener("touchmove", function (e) {
        myobj.touchCanvas(e);
        myobj.moveDraw(e);
    });
  }

};
