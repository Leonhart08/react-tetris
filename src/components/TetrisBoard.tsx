

const BOARD_ROW_COUNT = 10;
const BOARD_COLUMN_COUNT = 20;

import { useEffect } from 'react';
import useGameStore from './../store/gameStore.tsx';
import { TetrisBoardSlot } from './TetrisBoardSlot.tsx';
import { getPieceSlots } from '../helpers/game.ts';
import { GAME_STATE, PIECES_COLOR } from '../globals/index.ts';

export const TetrisBoard = () => {
  const { slots, filledSlots, gameState, currentPiece, movePieceLeft, movePieceRight, movePieceDown, rotatePiece, setLockDown, shouldLockDown, clearLines, checkLine } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === "ArrowRight") {
        movePieceRight();
      }
  
      if(event.key === "ArrowLeft") {
        movePieceLeft();
      }
  
      if(event.key === "ArrowDown") {
        movePieceDown({ isSoftLanding: true });
      }
      if(event.key === "ArrowUp") {
        rotatePiece();
      }
    };
    if (gameState !== GAME_STATE.GAME_0VER) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState]);  // Empty dependency array to run once
  
  useEffect(() => {
    
    if (![GAME_STATE.GAME_0VER,GAME_STATE.GAME_PAUSE].includes(gameState)) { // Check if the interval should be active
      console.log("gameState -->", gameState)
      const interval = setInterval(() => {
        movePieceDown({ isSoftLanding: false });
      }, 1000); // Update every 1000ms (1 second)
  
      return () => clearInterval(interval); // Clear interval when component unmounts or dependency changes
    }
  }, [gameState, movePieceDown]);

  useEffect(() => {

    if(shouldLockDown) {
      setLockDown()
    }

  }, [shouldLockDown]);

  useEffect(() => {

    if(gameState === GAME_STATE.LINE_CHECK) {
      checkLine()
    }

    if(gameState === GAME_STATE.LINE_CLEAR) {
      clearLines()
    }

  }, [gameState]);

  const getSlotColor = (pieceIndex) => {
    let slotColor = null;

    const pieceSlots = getPieceSlots(currentPiece)

    pieceSlots.forEach(pieceSlot => {
      if(pieceSlot === pieceIndex) {
        slotColor = PIECES_COLOR[currentPiece.type]
      }
    })

    filledSlots.forEach(filledSlot => {
      const { position , color } = filledSlot
      if(position === pieceIndex) {
        slotColor = color
      }
    })

    return slotColor;
  }

  return (
    <div className="tetris-board">
      <div className="tetris-board__border tetris-board__border--left">
        <div></div>
      </div>
        <div className="tetris-board__container"> 
          {slots.map((slot, index) => {
            const slotColor = getSlotColor(index)
            return <TetrisBoardSlot key={`slot-${index}`} slotIndex={index} slotColor={slotColor} ></TetrisBoardSlot>
          })}
          {gameState === GAME_STATE.GAME_0VER && (
            <div className="tetris-board__game-over-overlay"> 
              <div className="tetris-board__game-over-label"> Game Over </div> 
            </div>
            )
          }
        </div>
      <div className="tetris-board__border tetris-board__border--right">
        <div></div>
      </div>
    </div>
  )
}