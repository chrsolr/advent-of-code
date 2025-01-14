import { input, test } from './files/input-day-02'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\n')

const checkIfSafe = (levels: number[]): boolean => {
  let isPositiveDirection = null

  for (let i = 1; i < levels.length; i++) {
    const previous = levels[i - 1]
    const current = levels[i]

    if (previous === current) {
      return false
    }

    const currentDirection = previous >= current ? 'DOWN' : 'UP'
    if (isPositiveDirection === null) {
      isPositiveDirection = currentDirection
    } else if (isPositiveDirection !== currentDirection) {
      return false
    }

    const diff = Math.abs(previous - current)
    if (diff < 1 || diff > 3) {
      return false
    }
  }

  return true
}

const solvePartOne = (lines: string[]) => {
  let amountOfSafeReports = 0

  for (const line of lines) {
    const items = line.split(' ').filter(Boolean).map(Number)

    const isSafe = checkIfSafe(items)

    if (isSafe) {
      ++amountOfSafeReports
    }
  }

  return amountOfSafeReports
}

const solvePartTwo = (lines: string[]) => {
  let amountOfSafeReports = 0

  for (const line of lines) {
    const items = line.split(' ').filter(Boolean).map(Number)

    let isSafe = checkIfSafe(items)

    if (isSafe) {
      ++amountOfSafeReports
      continue
    }

    for (let i = 0; i < items.length; i++) {
      const subArray = items.toSpliced(i, 1)
      const checked = checkIfSafe(subArray)

      if (checked) {
        isSafe = true
        break
      }
    }

    if (isSafe) {
      ++amountOfSafeReports
    }
  }

  return amountOfSafeReports
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2024, 2, 1)
  printResult(answerPartTwo, 2024, 2, 2)
}
