"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell, EBoardCellInfoType } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";
import { TGameSounds } from "./sounds.js"; // importing from sounds.js for playing music and having the sound effects

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier.
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  2 }, // changed count to 2 since now i have 2 apples. 
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  menu: null,
  sounds: null,
  badBait: null,
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs, false); // Initialize bait with a starting position
  GameProps.badBait = new TBait(spcvs, true); // This is a bad bait 
  gameSpeed = 4; // Reset game speed
  if (hndUpdateGame) {
    clearInterval(hndUpdateGame); // Clearing the existing interval before needing to start a new game
  }
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
  GameProps.gameBoard.getCell(5, 3).infoType = EBoardCellInfoType.Empty; // clear the cell when the game starts so when snake goes on it, it doesn't cause die/game over
}

export function baitIsEaten(aType) {
  console.log("Bait eaten!");
  if (aType === EBoardCellInfoType.badBait) {
    console.log("Bad bait eaten! Decrease score and reset bait value."); 
    GameProps.menu.decGameScore(); 
    GameProps.badBait.update(); 
  } else { 
    /* Logic to increase the snake size and score when bait is eaten */
    GameProps.snake.grow(); // call draw coming from bait for growing the snake, called from snake.js
    GameProps.menu.incGameScore(); // Increment game score by the value of the bait in menu, called from menu.js
    GameProps.menu.resetBaitValue(); // Reset bait value when a new bait is generated, called from menu.js
    increaseGameSpeed(); // Increase game speed
    GameProps.bait.update(); 
  }

  GameProps.sounds.eatSound(); // Play eat sound when bait is eaten, called from sounds.js
}

//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle

  /* Create the game menu here */

  GameProps.menu = new TMenu(spcvs, SheetData);
  GameProps.sounds = new TGameSounds(); // start music when game loads

  newGame(); // Call this function from the menu to start a new game, remove this line when the menu is ready

  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  console.log("Game canvas is updating!");
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();

  switch (GameProps.gameStatus) {
    case EGameStatus.Idle:
      GameProps.menu.draw();
      break;
    case EGameStatus.Playing:
    case EGameStatus.Pause:
    case EGameStatus.GameOver:
      GameProps.bait.draw();
      GameProps.badBait.draw();
      GameProps.snake.draw();
      break;
  }

  GameProps.menu.draw(); // Draw the menu on top of the game elements
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
      }
      GameProps.menu.decBaitValue(); // Decrease bait value over time
      break;
  }

  if (GameProps.gameStatus === EGameStatus.GameOver) {
    GameProps.menu.showGameOver();
  }
}

function increaseGameSpeed() {
  /* Increase game speed logic here */
  hndUpdateGame = clearInterval(hndUpdateGame); // Clear the existing interval before putting the new one
  gameSpeed += 0.5; // increase speed by 0.5 each time bait is eaten
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // new interval with the updated game speed
  console.log("Increase game speed!");
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        GameProps.menu.showResumeBtn();  // Show the resume button when the game is paused
        GameProps.sounds.stopMusic(); 
        console.log("Game paused!");
      } 
      else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.menu.hideResumeBtn();  // Hide the button when the game is resumed
        GameProps.sounds.startMusic(); 
        console.log("Game resumed!");
      }
      console.log("Space key pressed!");
      /* Pause the game logic here */

      break;
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
