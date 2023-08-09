/**
 * Day 02
 * Instructions: https://adventofcode.com/2022/day/2
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/2'

export async function dayTwo2022() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 2 of 2022')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `A Y
                B X
                C Z`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_2_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  console.info('Total Example Score:', calculateScore(exampleInput))
  console.info('Total Answer Score:', calculateScore(lines))
}

function calculateScore(arr: string[]) {
  const shapes: Record<string, number> = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissors
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3, // Scissors
  }

  const mappings = {
    win: {
      points: 6,
      combinations: ['A Y', 'B Z', 'C X'],
    },
    draw: {
      points: 3,
      combinations: ['A X', 'B Y', 'C Z'],
    },
    lose: {
      points: 0,
      combinations: ['A Z', 'B X', 'C Y'],
    },
  }

  return arr.reduce((acc: number, curr: string) => {
    const [, shape] = curr.split(' ')
    const shapePoints = shapes[shape]
    let roundPoints = 0

    if (mappings.win.combinations.includes(curr)) {
      roundPoints = mappings.win.points
    }

    if (mappings.draw.combinations.includes(curr)) {
      roundPoints = mappings.draw.points
    }

    if (mappings.lose.combinations.includes(curr)) {
      roundPoints = mappings.lose.points
    }

    acc += shapePoints + roundPoints
    return acc
  }, 0)
}
