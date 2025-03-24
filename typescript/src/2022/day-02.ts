import { getInputData, printResult } from '../shared/utils'

type Moves = 'win' | 'draw' | 'lose'
type Shapes = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z'

const shapes: Record<string, number> = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
}

const moveOutcomes: Record<string, Moves> = {
  X: 'lose',
  Y: 'draw',
  Z: 'win',
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

const solvePartOne = (lines: string[]): number =>
  lines.reduce((previousValue: number, currentValue: string) => {
    const [, shape] = currentValue.split(' ')
    const shapePoints = shapes[shape]
    let roundPoints = 0

    if (mappings.win.combinations.includes(currentValue)) {
      roundPoints = mappings.win.points
    }

    if (mappings.draw.combinations.includes(currentValue)) {
      roundPoints = mappings.draw.points
    }

    if (mappings.lose.combinations.includes(currentValue)) {
      roundPoints = mappings.lose.points
    }

    previousValue += shapePoints + roundPoints
    return previousValue
  }, 0)

const solvePartTwo = (lines: string[]): number =>
  lines.reduce((previousValue: number, currentValue: string) => {
    const [opponentShape, ourShape] = currentValue.split(' ') as Shapes[]

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

    previousValue += shapePoints + roundPoints
    return previousValue
  }, 0)

export default () => {
  const inputFileDate = '2022-02'

  const lines = getInputData(inputFileDate)

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2022, 2, 1)
  printResult(answerPartTwo, 2022, 2, 2)
}
