"use strict";
//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSprite } from "libSprite";
import { TPoint } from "lib2d"; 
import { GameProps, SheetData } from "./game.mjs";
import { TBoardCell, EBoardCellInfoType } from "./gameBoard.js";

//------------------------------------------------------------------------------------------
//----------- Classes ---------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

export class TBait extends TSprite {
  #boardCell = null;
  constructor(aSpriteCanvas, aIsBadBait) {
    const pos = new TPoint(0, 0);
    super(aSpriteCanvas, SheetData.Bait, pos.x, pos.y);
    this.#boardCell = new TBoardCell(0, 0);
    this.isBadBait = aIsBadBait; 
    this.update();
  } // End of constructor 

  get isBadBait() {
    return this.index === 1; // Check if the bait is bad by checking its sprite index (assuming index 1 is for bad bait)
  }

  set isBadBait (value) { 
    if (value) { 
      this.index = 1; // Set the sprite index to 1 for bad bait
    }else { 
      this.index = 0; // Set the sprite index to 0 for regular bait
    }
  }
  
  update() {
    // Move the bait to a random empty cell on the game board when its eaten by the snake. 
    do{
      this.#boardCell.col = Math.floor(Math.random() * GameProps.gameBoard.cols);
      this.#boardCell.row = Math.floor(Math.random() * GameProps.gameBoard.rows);
    }while(GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType !== EBoardCellInfoType.Empty);
    this.x = this.#boardCell.col * this.spi.width;
    this.y = this.#boardCell.row * this.spi.height;
    // Update the bait cell info type to Bait
    // test if the bait is bad or not and update the cell info type accordingly
    if (this.isBadBait) {
      GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType = EBoardCellInfoType.badBait; 
    } else {
      GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType = EBoardCellInfoType.Bait; 
    }
  } // End of update

}
