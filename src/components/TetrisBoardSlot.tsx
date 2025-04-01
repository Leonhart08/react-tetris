


export const TetrisBoardSlot = ({ slotIndex, slotColor }) => {

  return <div 
    className="tetris-board-slot" 
    style={{
      backgroundColor: slotColor, 
      left: `${32*(slotIndex % 10)}px`,
      top: `${32*(Math.floor(slotIndex / 10))}px`,
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