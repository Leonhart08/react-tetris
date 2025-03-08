
export const Button = ( {label, onClick }) => {
  return(
    <div className="game-settings__button">
      <button
        onClick={onClick}
      > 
        <div className="game-settings__button-icon"></div>
        <div className="game-settings__button-label">
          {label}
        </div> 
      </button> 
    </div>
  )
}