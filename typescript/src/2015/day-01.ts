import input from './files/input-day-01'
import { printResult } from '../shared/utils'
import { getInputData } from '../shared/file-utils'

/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */

// const getInputData = (): string[] => input.trim().split('')

const calculateFloor = (chars: string[]): number =>
  chars.reduce(
    (previousValue, currentValue) =>
      (previousValue += currentValue === '(' ? 1 : -1),
    0,
  )

const calculatePosition = (
  chars: string[],
  total = 0,
  position = 0,
): number => {
  if (chars.length === 0 || total === -1) {
    return position
  }

  const [char] = chars
  const currentTotal = total + (char === '(' ? 1 : -1)
  return calculatePosition(chars.slice(1), currentTotal, position + 1)
}

const solvePartOne = (chars: string[]): number => calculateFloor(chars)
const solvePartTwo = (chars: string[]): number => calculatePosition(chars)

export default () => {
  const inputFileDate = '2015-01'

  const inputData = getInputData(inputFileDate)[0].split('')

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2015, 1, 1)
  printResult(answerPartTwo, 2015, 1, 2)
}
