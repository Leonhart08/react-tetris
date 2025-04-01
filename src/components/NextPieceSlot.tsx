


export const NextPieceSlot = ({ slotIndex, slotColor, pieceType }) => {
 
  return <div 
    className={`next-piece-slot next-piece-slot--${pieceType}`} 
    style={{ 
      backgroundColor: slotColor, 
      left: `${32*(slotIndex % 5)}px`,
      top: `${32*(Math.floor(slotIndex / 5))}px`,
    }}>
      <div 
        className={slotColor !== null ? `tetris-board-slot__inner-frame`: `tetris-board-slot__inner-frame-empty`}
        style={{ 
          backgroundColor: slotColor, 
        }} 
      > 
      </div>  
  </div>
} 