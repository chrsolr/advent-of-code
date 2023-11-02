/**
 * Day 02
 * Instructions: https://adventofcode.com/2022/day/2
 */
import { getInputData } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/2'

type Moves = 'win' | 'draw' | 'lose'
type Shapes = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z'

async function loadData() {
  const lines = await getInputData('2022/files/2022_day_2_input.txt')
  return lines.filter((v) => v).map((v) => v.trim())
}

export async function runPartOne() {
  const exampleInput = `A Y
                B X
                C Z`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const lines = await loadData()
  return [
    calculateScoreForPartOne(exampleInput),
    calculateScoreForPartOne(lines),
  ]
}

export async function runPartTwo() {
  const exampleInput = `A Y
                B X
                C Z`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const lines = await loadData()
  return [
    calculateScoreForPartTwo(exampleInput),
    calculateScoreForPartTwo(lines),
  ]
}

function print(example: number, answer: number, part = 1) {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 2 of 2022 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}

export async function day2_PartOne_2022() {
  const [example, answer] = await runPartOne()
  print(example, answer, 1)
}

export async function day2_PartTwo_2022() {
  const [example, answer] = await runPartTwo()
  print(example, answer, 2)
}

function calculateScoreForPartOne(arr: string[]) {
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

function calculateScoreForPartTwo(arr: string[]) {
  const moveOutcomes: Record<string, Moves> = {
    X: 'lose',
    Y: 'draw',
    Z: 'win',
  }

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
    const [opponentShape, ourShape] = curr.split(' ') as Shapes[]

    const outcome = moveOutcomes[ourShape] as Moves

    const currentHand =
      mappings[outcome].combinations.find((v) => v.startsWith(opponentShape)) ||
      ''

    const [, newShape] = currentHand.split(' ')
    const shapePoints = shapes[newShape]
    let roundPoints = 0

    if (mappings.win.combinations.includes(currentHand)) {
      roundPoints = mappings.win.points
    }

    if (mappings.draw.combinations.includes(currentHand)) {
      roundPoints = mappings.draw.points
    }

    if (mappings.lose.combinations.includes(currentHand)) {
      roundPoints = mappings.lose.points
    }

    acc += shapePoints + roundPoints
    return acc
  }, 0)
}
