import input from './files/input-day-03'
import { printResult } from '../shared/utils'

/**
 * Day 03
 * Instructions: https://adventofcode.com/2015/day/3
 */

type Direction = '^' | '>' | '<' | 'v'
type Coordinates = [number, number]

const getInputData = (): string => input.split('\n').filter((v) => v)[0]

function updateCoordinates(
  direction: Direction,
  coordinates: Coordinates,
): Coordinates {
  let [x, y] = coordinates

  if (direction === '^') {
    y += 1
  } else if (direction === '>') {
    x += 1
  } else if (direction === '<') {
    x -= 1
  } else if (direction === 'v') {
    y -= 1
  }

  return [x, y]
}

const solvePartOne = (directions: Direction[]): number => {
  const set = new Set().add('0,0')
  const coordinates: Coordinates = [0, 0]

  for (const direction of directions) {
    const [x, y] = updateCoordinates(direction, coordinates)
    coordinates[0] = x
    coordinates[1] = y
    set.add(coordinates.join(','))
  }

  return set.size
}

const solvePartTwo = (directions: Direction[]): number => {
  const santaCoordinates: Coordinates = [0, 0]
  const robotCoordinates: Coordinates = [0, 0]

  const coordinates = new Set()
  coordinates.add(santaCoordinates.join(','))
  coordinates.add(robotCoordinates.join(','))

  for (let i = 0; i < directions.length; i++) {
    const isSantaTurn = i % 2
    const direction = directions[i] as Direction

    if (isSantaTurn) {
      const [x, y] = updateCoordinates(direction, santaCoordinates)
      santaCoordinates[0] = x
      santaCoordinates[1] = y
      coordinates.add(santaCoordinates.join(','))
    } else {
      const [x, y] = updateCoordinates(direction, robotCoordinates)
      robotCoordinates[0] = x
      robotCoordinates[1] = y
      coordinates.add(robotCoordinates.join(','))
    }
  }

  return coordinates.size
}

export default () => {
  const inputData = getInputData().split('') as Direction[]

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2015, 3, 1)
  printResult(answerPartTwo, 2015, 3, 2)
}
