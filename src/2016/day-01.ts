import input, { examples } from './files/input-day-01'
import { printResult } from '../shared/utils'

enum Cardinal {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W',
}

const getInputData = (): string[] =>
  (examples[0].input || input).trim().split(', ')

const solvePartOne = (moves: string[]): number => {
  const x = 0
  const y = 0

  function turnLeft() {
    return 0
  }

  function turnRight() {
    return 0
  }

  for (const move of moves) {
    const [direction, ...rest] = move
    const amount = Number(rest.join(''))
    const unknown = direction === 'R' ? turnRight() : turnLeft()

    console.log('Current:', `${direction}${amount} - (${x},${y}) - ${unknown}`)
  }

  return Math.abs(x) + Math.abs(y)
}

const solvePartTwo = (chars: string[]): number => {
  return 0
}

export default () => {
  const inputData = getInputData()

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2016, 1, 1)
  printResult(answerPartTwo, 2016, 1, 2)
}
