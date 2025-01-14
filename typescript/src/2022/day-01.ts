import input from './files/input-day-01'
import { printResult } from '../shared/utils'

/**
 * Day 01
 * Instructions: https://adventofcode.com/2022/day/1
 */

const getInputData = (): number[] => input.trim().split('\n').map(Number)

const findMaxSum = (
  numbers: number[],
): {
  maxGroupCalories: number
  topThreeTotalCalories: number
} => {
  const calories: number[] = []
  let maxSum = 0
  let currentSum = 0

  for (const num of numbers) {
    if (num) {
      currentSum = Math.max(0, currentSum + num)
      continue
    }

    maxSum = Math.max(maxSum, currentSum)
    calories.push(currentSum)

    currentSum = 0
  }

  const [one, two, three] = calories.sort((a, b) => b - a)
  return { maxGroupCalories: maxSum, topThreeTotalCalories: one + two + three }
}

const solveChallenge = (
  numbers: number[],
): {
  maxGroupCalories: number
  topThreeTotalCalories: number
} => findMaxSum(numbers)

export default () => {
  const inputData = getInputData()

  const { maxGroupCalories, topThreeTotalCalories } = solveChallenge(inputData)

  printResult(maxGroupCalories, 2022, 1, 1)
  printResult(topThreeTotalCalories, 2022, 1, 2)
}
