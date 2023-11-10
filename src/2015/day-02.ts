import input from './files/input-day-02'
import { printResult } from '../shared/utils'

/**
 * Day 02
 * Instructions: https://adventofcode.com/2015/day/2
 */

const getInputData = (): string[] => input.split('\n').filter((v) => v)

const getDimensions = (calculation: string): [number, number, number] =>
  calculation.split('x').map(Number) as [number, number, number]

const partOneReducer = (memo: number, current: string): number => {
  const [length, width, height] = getDimensions(current)

  const sideOne = length * width
  const sideTwo = width * height
  const sideThree = height * length
  const lowest = Math.min(sideOne, sideTwo, sideThree)

  const total = 2 * (sideOne + sideTwo + sideThree) + lowest
  return memo + total
}

const partTwoReducer = (memo: number, current: string): number => {
  const [length, width, height] = getDimensions(current)

  const [shortSideOne, shortSideTwo] = [length, width, height].sort(
    (a, b) => a - b,
  )

  const ribbon = shortSideOne * 2 + shortSideTwo * 2
  const wrap = length * width * height
  const total = wrap + ribbon

  return memo + total
}

const solvePartOne = (lines: string[]): number =>
  lines.reduce(partOneReducer, 0)

const solvePartTwo = (lines: string[]): number =>
  lines.reduce(partTwoReducer, 0)

export default () => {
  const inputData = getInputData()

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2015, 2, 1)
  printResult(answerPartTwo, 2015, 2, 2)
}
