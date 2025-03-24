import { getInputData, printResult } from '../shared/utils'

/**
 * Day 02
 * Instructions: https://adventofcode.com/2015/day/2
 */

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

const solve = (
  lines: string[],
  reducer: (memo: number, current: string) => number,
): number => lines.reduce(reducer, 0)

export default () => {
  const inputFileDate = '2015-02'

  const inputData = getInputData(inputFileDate).filter((v) => v)

  const answerPartOne = solve(inputData, partOneReducer)
  const answerPartTwo = solve(inputData, partTwoReducer)

  printResult(answerPartOne, 2015, 2, 1)
  printResult(answerPartTwo, 2015, 2, 2)
}
