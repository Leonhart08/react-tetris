// src/store/useCounterStore.js
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'
import { checkAvailableSpace, checkCollision, checkLinesToBeCleared, getClearedLinesPoint, getPieceSlots, getRandomPiece, removeClearedLines } from '../helpers/game';
import { GAME_STATE, PIECES_COLOR } from '../globals';

const useGameStore = create(
  immer((set) => ({
    currentScore: 0,
    currentLevel: 1,
    currentLinesCleared: 0,
    softLandingAccPoints: 0,
    slots: Array(10*20).fill(null),
    gameState: GAME_STATE.PLAYING_PIECE,
    filledSlots: [],
    linesToBeClear: [],
    currentPiece: getRandomPiece(),
    nextPiece: getRandomPiece(),
    shouldLockDown: false,
    addPoints: () => set((state) => {
      state.pounts += 1
    }),
    movePieceLeft: () => set((state) => {
      const { currentPiece, filledSlots } = state
      
      const collision = checkCollision("left", {... currentPiece, position: state.currentPiece.position - 1 }, filledSlots)
      if(collision) {
        return 
      }
      state.currentPiece = {...state.currentPiece, position: state.currentPiece.position - 1 }
    }),
    movePieceRight: () => set((state) => {
      const { currentPiece, filledSlots } = state
      
      const collision = checkCollision("right", {... currentPiece, position: state.currentPiece.position + 1 }, filledSlots)
      if(collision) {
        return 
      }
      state.currentPiece = {...state.currentPiece, position: state.currentPiece.position + 1 }
    }),
    movePieceDown: (props) => set((state) => {
      const { isSoftLanding } = props
      const { currentPiece, filledSlots } = state
      
      const collision = checkCollision("down", {... currentPiece, position: state.currentPiece.position + 10 }, filledSlots)

      if(collision) {
        state.shouldLockDown = true
        return 
      }

      if(isSoftLanding) {
        state.softLandingAccPoints += 1
      }
      state.currentPiece = {...state.currentPiece, position: state.currentPiece.position + 10 }
    }),
    rotatePiece: () => set((state) => {
      const { currentPiece, filledSlots } = state
    
      const { type, position, rotation } = currentPiece

      let updatedPosition = position 

      if(type === "i-block") {
        if(rotation === 4) {
          updatedPosition = position 
        }
        if(rotation === 1) {
          updatedPosition = position + 1
        }
        if(rotation === 2) {
          updatedPosition = position - 11
        }
        if(rotation === 3) {
          updatedPosition = position + 10
        }
      }

      const collision = checkCollision("rotation", {...state.currentPiece, rotation: rotation === 4 ? 1 : rotation + 1, position: updatedPosition }, filledSlots)

      if(collision) {
        return 
      }

      state.currentPiece = {...state.currentPiece, rotation: rotation === 4 ? 1 : rotation + 1, position: updatedPosition }
    }),
    setLockDown: () => set((state) => {
      const { currentPiece } = state

      const { type } = currentPiece

      const pieceSlots = getPieceSlots(currentPiece)

      const parsedSlots = pieceSlots.map(slot => ({ position: slot, color: PIECES_COLOR[type] }))

      state.shouldLockDown = false

      const updatedFilledSlots = [...state.filledSlots, ...parsedSlots]
      
      const nextPiece = getRandomPiece()

      const availableSpace = checkAvailableSpace(nextPiece, updatedFilledSlots)

      if(!availableSpace) {
        state.gameState = GAME_STATE.GAME_0VER
        return
      }

      state.filledSlots = updatedFilledSlots
      state.currentPiece = state.nextPiece
      state.nextPiece = nextPiece
      state.gameState = GAME_STATE.LINE_CHECK
      state.currentScore += state.softLandingAccPoints
      state.softLandingAccPoints = 0
    }),
    checkLine: () => set((state) => {
      const { filledSlots } = state
      
      const linesToBeClear = checkLinesToBeCleared(filledSlots)

      if(linesToBeClear.length > 0) {
        state.gameState = GAME_STATE.LINE_CLEAR
        state.linesToBeClear = linesToBeClear
      } else {
        state.gameState = GAME_STATE.PLAYING_PIECE
      }

    }),
    clearLines: () => set((state) => {
      const { filledSlots, linesToBeClear } = state
      
      const updatedFilledSlots = removeClearedLines(filledSlots, linesToBeClear)

      state.filledSlots = updatedFilledSlots

      state.gameState = GAME_STATE.PLAYING_PIECE
      
      const points = getClearedLinesPoint(state.currentLevel, linesToBeClear.length)

      if(state.currentLinesCleared + linesToBeClear.length >= state.currentLevel*10) {
        state.currentLevel += 1
      }

      state.currentScore += points
      state.currentLinesCleared += linesToBeClear.length
    }),
    pauseGame: () => set((state) => {
      state.gameState = GAME_STATE.GAME_PAUSE
    }),
    resumeGame: () => set((state) => {
      state.gameState = GAME_STATE.PLAYING_PIECE
    }),
    restartGame: () => set((state) => {
      state.currentScore = 0
      state.currentLevel = 1
      state.currentLinesCleared = 0
      state.softLandingAccPoints = 0
      state.gameState = GAME_STATE.PLAYING_PIECE
      state.filledSlots = []
      state.linesToBeClear = []
      state.nextPiece = getRandomPiece()
      state.currentPiece = getRandomPiece()
      state.shouldLockDown = false
    }),
  })),
)











create((set) => ({
  

}));

export default useGameStore;
