import { input, test } from './files/input-day-02'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\n')

const solvePartOne = (lines: string[]) => {
  let amountOfSafeReports = 0

  for (const line of lines) {
    const items = line.split(' ').filter(Boolean).map(Number)

    let isSafe = true
    let direction = null

    for (let i = 0; i < items.length; i++) {
      const current = items[i]
      const next = items[i + 1]

      if (current === undefined || next === undefined) {
        continue
      }

      if (isSafe === false) {
        break
      }

      const currentDirection = current >= next ? 'DOWN' : 'UP'
      if (direction === null) {
        direction = currentDirection
      } else if (direction !== currentDirection) {
        isSafe = false
        break
      }

      if (Math.abs(current - next) >= 1 && Math.abs(current - next) <= 3) {
        isSafe = true
      } else {
        isSafe = false
      }
    }

    if (isSafe) {
      ++amountOfSafeReports
    }
  }

  return amountOfSafeReports
}

const solvePartTwo = (lines: string[]) => {
  return lines.length
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  // const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2024, 2, 1)
  // printResult(answerPartTwo, 2024, 2, 2)
}
