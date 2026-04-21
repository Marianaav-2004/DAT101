"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, EGameStatus, resetGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown; 
  #sfRunning; 
  #spGameScore; 
  #spGetReady; 
  #spGameOver; 
  #spMedal; 
  #spFinalScore; 
  #spHighScore; 
  #spGameOverText;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spTitle.index = 0;
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 195, 110);
    this.#spGetReady.hidden = true; 
    this.#spGetReady.index = 0;
    this.#spGameOver = new TSprite (aSpcvs, aSPI.gameOver, 175, 150); 
    this.#spGameOver.hidden = true; 
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 193); 
    this.#spMedal.hidden = true;  
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 355, 185); 
    this.#spFinalScore.hidden = true; 
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 355, 225); 
    this.#spHighScore.hidden = true; 
    this.#spGameOverText = new TSprite(aSpcvs, aSPI.infoText, 195,110); 
    this.#spGameOverText.hidden = true;
    this.#spGameOverText.index = 1;
  } 


  setSoundMute (aIsMuted) { 
    if (this.#sfRunning) { 
      if (aIsMuted) { 
        this.#sfRunning.pause(); 
      }else { 
        this.#sfRunning.play(); 
      }
    }
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spCountDown.draw();
    if (this.#spGameScore.hidden === false) {
      this.#spGameScore.draw(); 
    }
    this.#spGetReady.draw();

    if (this.#spGameOver.hidden === false) {
      this.#spGameOver.draw(); 
      this.#spMedal.draw(); 
      this.#spFinalScore.draw();
      this.#spHighScore.draw(); 
      this.#spGameOverText.draw();
    }
    if (this.#spPlayBtn.hidden === false) { 
      this.#spPlayBtn.draw(); 
    }
  }

  showGameOver () { 
    this.#spGameScore.hidden = true; 
    this.#spGameOver.hidden = false; 
    this.#spPlayBtn.hidden = false; 
    this.#spPlayBtn.y = 300; 
    this.#spGameOverText.hidden = false; 
    this.#spGameOverText.y = 90; 
    this.#spMedal.hidden = false; 
    this.#spFinalScore.hidden = false; 
    this.#spHighScore.hidden = false;
    this.#spFinalScore.value = this.#spGameScore.value; 

    const highScore = localStorage.getItem("flappyBirdHighScore") || 0;
    if (this.#spGameScore.value > highScore) { 
      localStorage.setItem("flappyBirdHighScore", this.#spGameScore.value); 
      this.#spHighScore.value = this.#spGameScore.value; 
    } else  { 
      this.#spHighScore.value = highScore; 
    }

    const currentScore = this.#spGameScore.value; 
    this.#spFinalScore.value = currentScore; 


    if (currentScore >= 3) { 
      this.#spMedal.hidden = false; 
      this.#spMedal.index = 3; 
    } else if (currentScore >= 2) {
      this.#spMedal.hidden = false; 
      this.#spMedal.index = 1; 
    } else if (currentScore >= 1) { 
      this.#spMedal.hidden = false; 
      this.#spMedal.index = 2; 
    } else { 
      this.#spMedal.index = 0; 
      this.#spMedal.hidden = true; 
    }
  } 


  countDown(){
    this.#spCountDown.value--;  
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true; 
      this.#spGetReady.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      this.#sfRunning.play();
      startGame(); 
    }
  }

  spPlayBtnClick(){ 
    resetGame(); 
    this.#spGameScore.value = 0; 
    this.#spGameScore.hidden = true; 

    this.#spGameOver.hidden = true; 
    this.#spMedal.hidden = true; 
    this.#spFinalScore.hidden = true; 
    this.#spHighScore.hidden = true; 
    this.#spGameOverText.hidden = true;
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true; 
    this.#spGetReady.hidden = false; 

    EGameStatus.state = EGameStatus.countDown; 
    console.log("Click!");
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
    this.#spTitle.hidden = true; 
    this.#spGetReady.hidden = false;
    setTimeout(this.countDown.bind(this), 1000);
  }

}