"use strict"; 

import { TSoundFile } from "libSound";

export class TGameSounds { 
    #eatSound; 
    #deadSound; 
    #musicSound; 
    #resumeMusic;
    constructor () {
        this.#eatSound = new TSoundFile ("./media/eat.mp3"); 
        this.#deadSound = new TSoundFile ("./media/dead.mp3"); 
        this.#musicSound = new TSoundFile ("./media/music.mp3"); 
        this.#musicSound.loop = true; // Set the music to loop continuously 
    }

    startMusic() {
        this.#musicSound.play(); 
    } 

    stopMusic() { 
        this.#musicSound.stop();
    }

    eatSound() { 
        this.#eatSound.stop();
        this.#eatSound.play();
    }

    deadSound() { 
        this.#deadSound.stop();
        this.#deadSound.play(); 
    }


}