import { getInputData, printResult } from '../shared/utils'

/**
 * Day 03
 * Instructions: https://adventofcode.com/2015/day/3
 */

type Direction = '^' | '>' | '<' | 'v'
type Coordinates = [number, number]

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
  const map = new Map<'santa' | 'robot', Coordinates>()
    .set('santa', [0, 0])
    .set('robot', [0, 0])

  for (const i in directions) {
    const direction = directions[i]
    const key = Number(i) % 2 ? 'santa' : 'robot'

    const currentCoordinates = updateCoordinates(direction, map.get(key)!)
    map.set(key, currentCoordinates)

    set.add(map.get(key)?.join(','))
  }

  return set.size
}

export default () => {
  const inputFileDate = '2015-03'

  const inputData = getInputData(inputFileDate)[0].split('') as Direction[]

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2015, 3, 1)
  printResult(answerPartTwo, 2015, 3, 2)
}
