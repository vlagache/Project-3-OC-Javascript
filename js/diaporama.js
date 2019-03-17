class Diaporama{
  constructor(tableau){
    this.tableau = tableau;
    this.indice = 0;
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

    contentSlider(){
      document.getElementById("image_slider").src = this.tableau[this.indice].image;
      document.getElementById("description").innerHTML =this.tableau[this.indice].text;
    }
};
