import { Direction, Size, IconSize } from './types'
import { directions, sizes } from "./constants"

export const getDirection = (direction: Direction): string => {
  return directions[direction]
}

export const getSize = (size: Size): IconSize => {
  const definedSize = sizes[size]

  return {
    width: definedSize,
    height: definedSize
  }
}

