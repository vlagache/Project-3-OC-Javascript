class Timer {
  constructor(min, sec){
    this.min = parseInt(min); // min sera sous la forme Int
    this.sec = parseInt(sec);
    this.interval;

  }

countdown(){
    this.interval = setInterval ( () =>{
      this.timerSave();
      if ( this.min === 0 && this.sec === 0){
        this.clearCountdown();
        this.clearTimerSave();
        sessionStorage.removeItem("nomStationSaveResa");
        reservationElt.style.display="none";
        messageElt.style.display="block";
        timerElt.style.display = "none";


      } else {
        if ( this.sec === 0 ){
          this.sec = 60;
          this.min = this.min - 1;
        }
        this.sec = this.sec - 1
        minElt.textContent = this.min + " min ";
        secElt.textContent = this.sec + " s ";
      }
    },1000);
  }

clearCountdown(){
  clearInterval(this.interval)

}
timerSave(){
  sessionStorage.setItem("minSaveResa", this.min);
  sessionStorage.setItem("secSaveResa", this.sec);
}
clearTimerSave(){
  sessionStorage.removeItem("minSaveResa");
  sessionStorage.removeItem("secSaveResa");
}

}
