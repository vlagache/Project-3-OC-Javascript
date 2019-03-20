class Diaporama{
  constructor(tableau){
    this.tableau = tableau;
    this.indice = 0;

    var intervalSlider;
  }
  contentSlider(){
      document.getElementById("image_slider").src = this.tableau[this.indice].image;
      document.getElementById("description").innerHTML =this.tableau[this.indice].text;
  }
  nextSlide(){
    this.indice++;
     if (this.indice > this.tableau.length - 1) {
       this.indice = 0 ;
     };
     this.contentSlider();
  }
  previousSlide() {
    this.indice--;
      if ( this.indice < 0 ) {
        this.indice = this.tableau.length -1;
      };
      this.contentSlider();
  }
  autoSlider(){
      this.intervalSlider = setInterval(this.nextSlide.bind(this), 5000);
  }
  allListenerDiapo(){
      let myobj = this;
      arrow_right.addEventListener("click", function() {
       myobj.nextSlide();
      });
      // Previous Button
      arrow_left.addEventListener("click", function() {
        myobj.previousSlide();
      });
      // Pause Button
      pause.addEventListener("click", function() {
        clearInterval(myobj.intervalSlider);
        document.getElementById("pause").style.display= "none";
        document.getElementById("play").style.display= "block";
      });

      // Play Button
      play.addEventListener("click", function() {
        myobj.intervalSlider =  setInterval(myobj.nextSlide.bind(myobj), 5000);
        document.getElementById("pause").style.display= "block";
        document.getElementById("play").style.display= "none";
      });
      // Arrow navigation
      document.addEventListener("keydown", function(e){
        if ( e.keyCode === 37 ){
          myobj.previousSlide();
        }
      });
      document.addEventListener("keydown", function(e){
        if ( e.keyCode === 39 ){
          myobj.nextSlide();
        }
      });
  }
};
