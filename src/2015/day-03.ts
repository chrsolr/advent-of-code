import input from './files/input-day-03'
import { printResult } from '../shared/utils'

/**
 * Day 03
 * Instructions: https://adventofcode.com/2015/day/3
 */

type Direction = '^' | '>' | '<' | 'v'
type Coordinates = [number, number]

const getInputData = (): string => input.split('\n').filter((v) => v)[0]

const updateCoordinates = (
  direction: Direction,
  coordinates: Coordinates,
): Coordinates => {
  let [x, y] = coordinates

  switch (direction) {
    case '^':
      return [x, (y += 1)]
    case '>':
      return [(x += 1), y]
    case '<':
      return [(x -= 1), y]
    case 'v':
      return [x, (y -= 1)]
    default:
      return [x, y]
  }
}

const solvePartOne = (directions: Direction[]): number => {
  const set = new Set().add('0,0')
  let coordinates: Coordinates = [0, 0]

  for (const direction of directions) {
    coordinates = updateCoordinates(direction, coordinates)
    set.add(coordinates.join(','))
  }

  return set.size
}

const solvePartTwo = (directions: Direction[]): number => {
  const set = new Set().add('0,0').add('0,0')
  const santaCoordinates: Coordinates = [0, 0]
  const robotCoordinates: Coordinates = [0, 0]

  for (const i in directions) {
    const direction = directions[i]
    const isSantaTurn = Number(i) % 2

    if (isSantaTurn) {
      const [x, y] = updateCoordinates(direction, santaCoordinates)
      santaCoordinates[0] = x
      santaCoordinates[1] = y
      set.add(santaCoordinates.join(','))
    } else {
      const [x, y] = updateCoordinates(direction, robotCoordinates)
      robotCoordinates[0] = x
      robotCoordinates[1] = y
      set.add(robotCoordinates.join(','))
    }
  }

  return set.size
}

export default () => {
  const inputData = getInputData().split('') as Direction[]

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2015, 3, 1)
  printResult(answerPartTwo, 2015, 3, 2)
}
