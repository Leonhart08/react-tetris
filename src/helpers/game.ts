import { PIECES_TYPES } from "../globals"

export const getPieceSlots = (currentPiece) => {
  const { type: pieceType, position: piecePosition, rotation } = currentPiece

  if(pieceType === "o-block") {
    return [piecePosition, piecePosition + 1, piecePosition + 10, piecePosition + 11]
  }

  if(pieceType === "j-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 11]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition + 9]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition - 11]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition -9]
    }
  }

  if(pieceType === "l-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 9]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition + 11]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition - 9]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition - 11]
    }
  }

  if(pieceType === "t-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 10, piecePosition + 1, piecePosition -1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition + 1]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 10]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition -1]
    }
  }
  if(pieceType === "s-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 10, piecePosition - 9, piecePosition - 1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 1, piecePosition - 11, piecePosition + 10]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 10, piecePosition - 9, piecePosition - 1]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 1, piecePosition - 11, piecePosition + 10]
    }
  }

  if(pieceType === "z-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition + 10, piecePosition + 11, piecePosition - 1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition + 1, piecePosition - 9, piecePosition + 10]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition + 10, piecePosition + 11, piecePosition - 1]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition + 1, piecePosition - 9, piecePosition + 10]
    }
  }

  if(pieceType === "i-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 2]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition + 20]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 2]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 10, piecePosition + 10, piecePosition + 20]
    }
  }
  return []
}

export const getNextPieceSlots = (currentPiece) => {
  const { type: pieceType, position: piecePosition, rotation } = currentPiece

  if(pieceType === "o-block") {
    return [piecePosition, piecePosition + 1, piecePosition + 5, piecePosition + 6]
  }

  if(pieceType === "j-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 6]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition + 4]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition - 6]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition - 4]
    }
  }

  if(pieceType === "l-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 4]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition + 6]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition - 4]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition - 6]
    }
  }

  if(pieceType === "t-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 5, piecePosition + 1, piecePosition -1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition + 1]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 5]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition -1]
    }
  }
  if(pieceType === "s-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 5, piecePosition - 4, piecePosition - 1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 1, piecePosition - 6, piecePosition + 5]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 5, piecePosition - 4, piecePosition - 1]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 1, piecePosition - 6, piecePosition + 5]
    }
  }

  if(pieceType === "z-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition + 5, piecePosition + 6, piecePosition - 1]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition + 1, piecePosition - 4, piecePosition + 5]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition + 5, piecePosition + 6, piecePosition - 1]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition + 1, piecePosition - 4, piecePosition + 5]
    }
  }

  if(pieceType === "i-block") {
    if(rotation === 1) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 2]
    }
    if(rotation === 2) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition + 10]
    }
    if(rotation === 3) {
      return [piecePosition, piecePosition - 1, piecePosition + 1, piecePosition + 2]
    }
    if(rotation === 4) {
      return [piecePosition, piecePosition - 5, piecePosition + 5, piecePosition + 10]
    }
  }
  return []
}

export const checkCollision = (direction, currentPiece, filledSlots) => {
  const { type, position, rotation } = currentPiece
  
  let collision = false

  // Get piece occupied slots (depending of the type)

  const filledSlotsPosition = filledSlots.map((filledSlot => filledSlot.position))
  
  const piecesSlot = getPieceSlots(currentPiece)

  // Check right border collision

  if(type === "o-block") {
    if(position % 10 >= 9) {
      collision = true
    }
    if(position % 10 < 0) {
      collision = true
    }
    if(Math.floor(position / 10 ) > 18) {
      collision = true
    }
  }

  if(type === "i-block") {
    if(rotation === 1 || rotation === 3) {
      if(direction === "left") {
        if((position) % 10 === 0) {
          collision = true
        }
      }
        
      if(direction === "right") {
        if((position) % 10 === 8) {
          collision = true
        }
      }
  
      if(direction === "down") {
        if(position > 200) {
          collision = true
        }
      }

      if(direction === "rotation") {
        if(position % 10 > 7  || position % 10 < 1) {
          collision = true
        }
      }
    }
    
    if(rotation === 2 || rotation === 4) {
      if(direction === "left") {
        if((position) % 10 === 9) {
          collision = true
        }
      }
        
      if(direction === "right") {
        if((position) % 10 === 0) {
          collision = true
        }
      }
  
      if(direction === "down") {
        if(position + 20 >= 200) {
          collision = true
        }
      }

      if(direction === "rotation") {
        if((position + 20) >= 200) {
          collision = true
        }
      }
    }
  }

  if(type === "t-block") {
    if(rotation === 1) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position > 200) {
          collision = true
        }
      }
    }

    if(rotation === 2) {
      if(direction === "left") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position + 10  > 200) {
          collision = true
        }
      }
    }

    if(rotation === 3) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position + 10   > 200) {
          collision = true
        }
      }
    }

    if(rotation === 4) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position + 10 > 200) {
          collision = true
        }
      }
    }
  }

  if(type === "s-block") {
    if(rotation === 1 || rotation === 3) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position > 200) {
          collision = true
        }
      }

      if(direction === "rotation") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 2 || rotation === 4) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position + 10  > 200) {
          collision = true
        }
      }
    }
  }

  if(type === "z-block") {
    if(rotation === 1 || rotation === 3) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position > 200) {
          collision = true
        }
      }
      if(direction === "rotation") {
        if(position % 10 === 0) {
          collision = true
        }
      }
    }

    if(rotation === 2 || rotation === 4) {
      if(direction === "left") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }

      if(direction === "down") {
        if(position + 10  > 200) {
          collision = true
        }
      }
    }
  }

  if(type === "j-block") {

    if(rotation === 1) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 2) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 0) {
          collision = true
        }
      }
    }

    if(rotation === 3) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 4) {
      if(direction === "left") {
        if(position % 10 === 9) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }
  }
  if(type === "l-block") {
    console.log("L Block Rotation", rotation)
    if(rotation === 1) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 2) {
      if(direction === "left") {
        if(position % 10 === 9) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 3) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 9) {
          collision = true
        }
      }
    }

    if(rotation === 4) {
      if(direction === "left") {
        if(position % 10 === 0) {
          collision = true
        }
      }
      if(direction === "right") {
        if(position % 10 === 0) {
          collision = true
        }
      }
    }
  }

  if(collision == true) {
    console.log(`Collision piece [${type}] moving [${direction}] with [borders]"`)
    return true
    
  }

  collision = piecesSlot.some((slot) => {
    return slot > 200 ||  slot < 0 || filledSlotsPosition.includes(slot)  
  })

  if(collision) {
    console.log(`Collision piece [${type}] moving [${direction}] with [pieces]"`)
  }
  return collision
}

export const checkLinesToBeCleared = (filledSlots) => {
  const linesToBeCleared = []

  const filledSlotsPosition = filledSlots.map(slots => slots.position)

  for(let i = 0; i < 200 ; i = i + 10) {
    let isRowComplete = true

    for(let j = 0; j < 10; j++) {

      const currentPosition = i + j 
      if(!filledSlotsPosition.includes(currentPosition)){
        isRowComplete = false
        break
      }
    }

    if(isRowComplete) {
      const currentRow = Math.floor(i/10)
      linesToBeCleared.push(currentRow)
    }
  }

  return linesToBeCleared
}

export const removeClearedLines = (filledSlots, linesToBeClear) => {
    let updatedFilledSlots = filledSlots

    // Clear Lines

    linesToBeClear.forEach(lineIndex => {
      updatedFilledSlots = updatedFilledSlots.filter((slot) => {
        return slot.position < lineIndex*10 || slot.position >= (lineIndex + 1)*10
      })
    })

 
  updatedFilledSlots = updatedFilledSlots.map((slot) => {
    let rowJumps = 0
    linesToBeClear.forEach((lineIndex) => {
      if(lineIndex*10 > slot.position){
        rowJumps += 10
      }
    })
    return {...slot, position: slot.position + rowJumps }
  })

  return updatedFilledSlots
}

export const getRandomPiece = () => {
  const randomIndex = Math.floor(Math.random() * 7);
  const newPieceType = PIECES_TYPES[randomIndex]
  
  return { type: newPieceType, position: 14, rotation: 1 }
}

export const checkAvailableSpace = (nextPiece, filledSlots) => {

  const piecesSlot = getPieceSlots(nextPiece)

  const filledSlotsPositions = filledSlots.map(slot => slot.position)
  
  const availableSpace = piecesSlot.every(pieceSlot =>  !filledSlotsPositions.includes(pieceSlot))

  return availableSpace

}

export const getClearedLinesPoint = (currentLevel, numberOfLines) => {
  if(numberOfLines === 1) {
    return 40*(currentLevel)
  }
  if(numberOfLines === 2) {
    return 100*(currentLevel)
  }
  if(numberOfLines === 3) {
    return 300*(currentLevel)
  }
  if(numberOfLines === 4) {
    return 1200*(currentLevel)
  }

  return 0

}