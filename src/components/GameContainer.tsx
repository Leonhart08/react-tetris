import { GameStatusPanel } from "./GameStatusPanel"
import { NextPiecePanel } from "./NextPiecePanel"
import { TetrisBoard } from "./TetrisBoard"
import { GameSettings } from "./GameSettings"

export const GameContainer = () => {
  return (
    <div className="game-container">
      <div className="game-container__left-section">

        <TetrisBoard />

      </div>
      <div className="game-container__right-section">
        <NextPiecePanel />
        <GameStatusPanel />
        <GameSettings />
      </div>
    </div>
  )
}