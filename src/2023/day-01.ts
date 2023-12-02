import input, { example } from './files/input-day-01'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => /* example ||  */ input.split('\n')

const map = new Map<string, number>([
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
])

const partOneReducer = (memo: number, line: string) => {
  const numbers = []

  for (let i = 0; i <= line.length; i++) {
    const current = line[i]

    if (!isNaN(Number(current))) {
      numbers.push(current)
      continue
    }
  }

  const [firstNumber] = numbers
  const secondNumber = numbers[numbers.length - 1]

  return memo + Number(`${firstNumber}${secondNumber}`)
}

const partTwoReducer = (memo: number, line: string) => {
  return memo
}

const solvePartOne = (lines: string[]): number =>
  lines.reduce(partOneReducer, 0)

const solvePartTwo = (lines: string[]): number =>
  lines.reduce(partTwoReducer, 0)

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 1, 1)
  printResult(answerPartTwo, 2023, 1, 2)
}
