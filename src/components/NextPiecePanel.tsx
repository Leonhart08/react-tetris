import { PIECES_COLOR } from "../globals";
import { getNextPieceSlots } from "../helpers/game";
import useGameStore from "../store/gameStore";
import { NextPieceSlot } from "./NextPieceSlot";

export const NextPiecePanel = () => {
  const { nextPiece } = useGameStore();
  
  const piecesSlot = getNextPieceSlots({ ...nextPiece, position: 11 })

  return (
  <div className="next-piece">
    <div className="next-piece__title"> NEXT PIECE </div>
    <div className="next-piece__container">
      {Array(25).fill(null).map((_slot, index) => {
        const slotColor = piecesSlot.includes(index - 1) ? PIECES_COLOR[nextPiece.type] : null

        return (
          <NextPieceSlot 
            key={`slot-${index}`}
            pieceType={nextPiece.type} 
            slotIndex={index} 
            slotColor={slotColor} 
          />
        )
      })}
    </div>
    <div className="next-piece__bottom-decoration" />
  </div>)
}