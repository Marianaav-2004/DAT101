"use strict";

/* Use this file to create the menu for the snake game. */

import { TSpriteButton, TSpriteNumber, TSprite } from "libSprite";
import { GameProps, EGameStatus, SheetData, newGame } from "./game.mjs"; 

export class TMenu { 
    #spPlayBtn; 
    #spGameScore;
    #spBaitValue; 
    #spGameOver;
    #spHomeBtn; 
    #spRetryBtn; 
    #resumeBtn; 
    constructor (aSpcvs, aSPI) { 
        this.#spPlayBtn = new TSpriteButton (aSpcvs, aSPI.Play, 360, 220); 
        this.#spPlayBtn.addEventListener ("click", this.#spPlayBtnClick.bind(this)); 
        this.#spPlayBtn.animationSpeed = 4; // Give the play button an animation in the beginning 
        this.#spGameScore = new TSpriteNumber (aSpcvs, aSPI.Number, 10, 10, 0);
        this.#spGameScore.alpha = 0.5;
        this.#spGameScore.scale = 0.5; 
        this.#spGameScore.digits = 0; 
        this.#spBaitValue = new TSpriteNumber (aSpcvs, aSPI.Number, 10, 60, 0, 2);
        this.#spBaitValue.alpha = 0.5;
        this.#spBaitValue.value = 20; // Initial bait value 
        this.#spBaitValue.scale = 0.5; 
        this.#spGameOver = new TSprite (aSpcvs, aSPI.GameOver, 30, 45);
        this.#spGameOver.hidden = true; 
        this.#spHomeBtn = new TSpriteButton (aSpcvs, aSPI.Home, 95, 395); 
        this.#spHomeBtn.addEventListener ("click", this.spHomeBtnClick.bind(this)); 
        this.#spHomeBtn.hidden = true; 
        this.#spRetryBtn= new TSpriteButton (aSpcvs, aSPI.Retry, 645, 395); 
        this.#spRetryBtn.addEventListener ("click", this.spRetryBtnClick.bind(this)); 
        this.#spRetryBtn.hidden = true; 
        this.#resumeBtn = new TSpriteButton (aSpcvs, aSPI.Resume, 360, 220);
        this.#resumeBtn.addEventListener ("click", this.spResumeBtnClick.bind(this)); 
        this.#resumeBtn.index = 0; 
        this.#resumeBtn.hidden = true; 
        this.#resumeBtn.animationSpeed = 7;
    }

    #spPlayBtnClick() { 
        // Change the game status to Playing when the play button is clicked
        GameProps.gameStatus = EGameStatus.Playing; 
        this.#spPlayBtn.visible = false; // Hide the play button after starting the game, (visible and hidden should be here, try to keep draw as simple as possible)
        GameProps.sounds.startMusic(); 
    }

    incGameScore() { 
        this.#spGameScore.value += this.#spBaitValue.value; // Increment game score by the value of the bait
    }

    decBaitValue() { // Decreases the bait value 
        this.#spBaitValue.value--; 
        if(this.#spBaitValue.value <= 0) {
            this.#spBaitValue.value = 1; // Ensure bait value does not go below 0 
        }
    }

    decGameScore () { 
        this.#spGameScore.value -= 2; 
        if (this.#spGameScore.value < 0) { 
            this.#spGameScore.value = 0; 
        }
    }

    resetBaitValue() {
        this.#spBaitValue.value = 20; // Reset bait value to 20 when a new bait is generated
    }

    showGameOver() {
        this.#spGameOver.hidden = false;
        this.#spHomeBtn.hidden = false;
        this.#spRetryBtn.hidden = false;

        this.#spGameScore.x = 550; 
        this.#spGameScore.y = 250;
        this.#spGameScore.scale = 1;
        this.#spGameScore.alpha = 1.0; 

        GameProps.sounds.stopMusic(); // stop music when game is over 
    }

    spHomeBtnClick() {
        GameProps.gameStatus = EGameStatus.Idle;
        newGame(); // Reset the game state
        this.resetMenu(); 
    }

    resetMenu() { // reset menu to the beginning after clicking the home button, referring to the home button function before this one  
        this.#spPlayBtn.visible = true; 
        this.#spGameOver.hidden = true; 
        this.#spHomeBtn.hidden = true;
        this.#spRetryBtn.hidden = true;
        this.#spGameScore.value = 0; 

        this.#spGameScore.x = 10;
        this.#spGameScore.y = 10;
        this.#spGameScore.scale = 0.5;
        this.#spGameScore.alpha = 0.5;
        this.resetBaitValue(); // Reset bait value 

        this.#resumeBtn.hidden = true;
        GameProps.sounds.startMusic(); 
        GameProps.sounds.stopMusic(); 
    }

    spRetryBtnClick() { 
        GameProps.gameStatus = EGameStatus.Playing;
        newGame(); // Reset the game state
        this.#spGameOver.hidden = true; // did it manually here instead of calling the resetMenu function, so the play/start button does now show up again when playing 
        this.#spHomeBtn.hidden = true;
        this.#spRetryBtn.hidden = true;

        this.#spGameScore.value = 0;
        this.#spGameScore.x = 10;
        this.#spGameScore.y = 10;
        this.#spGameScore.scale = 0.5;
        this.#spGameScore.alpha = 0.5;
        this.#spGameOver.value = 0; 
        this.resetBaitValue(); 

        GameProps.sounds.startMusic(); // fix music to restart when retrying game 
    }

    showResumeBtn() { 
        this.#resumeBtn.hidden = false; 
    }

    hideResumeBtn() { 
        this.#resumeBtn.hidden = true; 
    }

    spResumeBtnClick() { 
        GameProps.gameStatus = EGameStatus.Playing; 
        this.hideResumeBtn(); 
        GameProps.sounds.startMusic();  
    }
    
    updateResumeButton (gameStatus) { 
        this.#resumeBtn.hidden = gameStatus !== EGameStatus.Pause; 
        GameProps.sounds.stopMusic; 
    }


    draw () { 
        this.#spPlayBtn.draw(); 
        this.#spGameScore.draw(); 
        this.#spGameOver.draw();
        this.#spBaitValue.draw();
        this.#spHomeBtn.draw();
        this.#spRetryBtn.draw(); 
        this.#spGameScore.draw(); 
        this.#resumeBtn.draw();
    }

}
