import input from './files/input-day-02'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\n')

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

  printResult(answerPartOne, 2023, 2, 1)
  printResult(answerPartTwo, 2023, 2, 2)
}
