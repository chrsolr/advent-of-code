/**
 * Day 03
 * Instructions: https://adventofcode.com/2015/day/3
 */
import { getInputData } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/3'

export type Direction = '^' | '>' | '<' | 'v'

async function getData() {
  const [line] = await getInputData('2015/files/2015_day_3_input.txt')
  return line
}

function printResult(answer: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 3 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Answer Score:', answer)
}

function updateCoordinates(
  direction: Direction,
  coordinates: [number, number],
): [number, number] {
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

export async function solvePartOne(data: Direction[]) {
  const coordinates: [number, number] = [0, 0]

  const set = new Set()
  set.add(coordinates.join(','))

  for (const direction of data) {
    const [x, y] = updateCoordinates(direction, coordinates)
    coordinates[0] = x
    coordinates[1] = y
    set.add(coordinates.join(','))
  }

  return set.size
}

export async function solvePartTwo(data: Direction[]) {
  const santaCoordinates: [number, number] = [0, 0]
  const robotCoordinates: [number, number] = [0, 0]

  const coordinates = new Set()
  coordinates.add(santaCoordinates.join(','))
  coordinates.add(robotCoordinates.join(','))

  for (let i = 0; i < data.length; i++) {
    const isSantaTurn = i % 2
    const direction = data[i] as Direction

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

export async function day3_PartOne_2015() {
  const line = await getData()
  const answer = await solvePartOne(line.split('') as Direction[])
  printResult(answer, 1)
}

export async function day3_PartTwo_2015() {
  const line = await getData()
  const answer = await solvePartTwo(line.split('') as Direction[])
  printResult(answer, 2)
}
