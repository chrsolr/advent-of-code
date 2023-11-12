import { printResult } from '../shared/utils'
import input from './files/input-day-06'

const lines = input.split('\n').filter((v) => v)

const createMatrix = (
  gridRowAmount: number,
  gridColAmount: number,
  value: unknown = false,
) =>
  Array.from(Array(gridRowAmount), () =>
    Array.from(Array(gridColAmount), () => value),
  )

const getInstructions = (line: string) => {
  const instructions = line.split(' ')
  let action
  let direction
  let from
  let to

  if (instructions.length === 5) {
    ;[action, direction, from, , to] = instructions
  } else {
    ;[action, from, , to] = instructions
  }

  return { action, direction, from, to }
}

function solvePartOne(
  lines: string[],
  gridRowAmount = 1000,
  gridColAmount = 1000,
) {
  let count = 0
  const matrix = createMatrix(gridRowAmount, gridColAmount)

  for (const line of lines) {
    const { action, direction, to, from } = getInstructions(line)

    const [xf, yf] = from.split(',').map(Number)
    const [xt, yt] = to.split(',').map(Number)

    for (let row = xf; row <= xt; row++) {
      for (let col = yf; col <= yt; col++) {
        const isLightTurnedOn = matrix[row][col]

        if (action === 'toggle') {
          matrix[row][col] = !isLightTurnedOn
          !isLightTurnedOn ? count++ : count--
          continue
        }

        if (!isLightTurnedOn && direction === 'on') {
          matrix[row][col] = true
          count++
          continue
        }

        if (isLightTurnedOn && direction === 'off') {
          matrix[row][col] = false
          count--
        }
      }
    }
  }

  return count
}

function solvePartTwo(
  lines: string[],
  gridRowAmount = 1000,
  gridColAmount = 1000,
) {
  const matrix = createMatrix(gridRowAmount, gridColAmount, 0) as number[][]

  for (const line of lines) {
    const { action, direction, to, from } = getInstructions(line)

    const [xf, yf] = from.split(',').map(Number)
    const [xt, yt] = to.split(',').map(Number)

    for (let row = xf; row <= xt; row++) {
      for (let col = yf; col <= yt; col++) {
        const currentBrightness = matrix[row][col]

        if (action === 'toggle') {
          matrix[row][col] = 2 + currentBrightness
        }

        if (direction === 'on') {
          matrix[row][col] += 1
        }

        if (direction === 'off' && currentBrightness > 0) {
          matrix[row][col] -= 1
        }
      }
    }
  }

  return matrix.reduce(
    (rowTotal, rowValues) =>
      rowTotal +
      rowValues.reduce((colsTotal, colsValues) => colsTotal + colsValues, 0),
    0,
  )
}

export default () => {
  const answerOne = solvePartOne(lines)
  const answerTwo = solvePartTwo(lines)

  printResult(answerOne, 2015, 6, 1)
  printResult(answerTwo, 2015, 6, 2)
}
