import input, { example } from './files/input-day-03'
import { printResult } from '../shared/utils'

const getInputData = (): string[] =>
  (example || input).split('\n').filter((line) => line)

const solvePartOne = (lines: string[]) => {
  return lines.length
}

const solvePartTwo = (lines: string[]) => {
  return lines.length
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 3, 1)
  printResult(answerPartTwo, 2023, 3, 2)
}
