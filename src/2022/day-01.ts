import { getInputData } from '../shared/utils'

/**
 * Day 01
 * Instructions: https://adventofcode.com/2022/day/1
 * Top #3: { one: 69206, two: 65317, three: 62877 }
 * Part #1 Answer: 69206
 * Part #2 Answer: 197400
 */
const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/1'

function findMaxSum(numbers: number[]): {
  maxGroupCalories: number
  topThreeTotalCalories: number
} {
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

export async function solveChallenge(numbers: number[]) {
  const { maxGroupCalories, topThreeTotalCalories } = findMaxSum(numbers)

  return {
    maxGroupCalories,
    topThreeTotalCalories,
  }
}

function print(maxGroupCalories: number, topThreeTotalCalories: number) {
  console.info('***************************************************')
  console.info('Advent of Code: Day 1 of 2022 (Part #1 & #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Part #1 Answer:', maxGroupCalories)
  console.info('Part #2 Answer:', topThreeTotalCalories)
}

export async function day1_2022() {
  const numbers = (await getInputData('/2022/files/2022_day_1_input.txt')).map(
    Number,
  )
  const { maxGroupCalories, topThreeTotalCalories } = await solveChallenge(
    numbers,
  )
  print(maxGroupCalories, topThreeTotalCalories)
}
