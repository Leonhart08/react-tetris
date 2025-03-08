


import useGameStore from "../store/gameStore";

export const GameStatusPanel = () => {
  const { currentScore, currentLevel, currentLinesCleared } = useGameStore();
  
  return (
  <div className="game-status">
    <div className="game-status__container">
      <div className="game-status__score">
        <div className="game-status__score-label"> SCORE </div>
        <div className="game-status__score-value"> {currentScore} </div>
      </div>
      <div className="game-status__info">
        <div>
          <div className="game-status__info-label"> LEVEL </div>
          <div className="game-status__info-value"> {currentLevel} </div>
        </div>
        <div>
          <div className="game-status__info-label"> LINES </div>
          <div className="game-status__info-value"> {currentLinesCleared} </div>
        </div>
      </div>
    </div>
  </div>)
}