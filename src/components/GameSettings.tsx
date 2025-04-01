import { GAME_STATE } from "../globals";
import useGameStore from "../store/gameStore";
import { Button } from "./Button";


export const GameSettings = () => {
  const { gameState, pauseGame, resumeGame, restartGame } = useGameStore();

  return (
  <div className="game-settings">
    <div className="game-settings__container">
      <Button 
        label={gameState === GAME_STATE.GAME_PAUSE ? "Play" : "Resume"}
        onClick={() => { 
          if(gameState === GAME_STATE.GAME_PAUSE) {
            resumeGame()
            return
          }
          pauseGame()
        }}
        
      />
      <Button 
        label="Restart"
        onClick={() => { 
          restartGame()
        }} 
        />

    </div>
  </div>
  )
}