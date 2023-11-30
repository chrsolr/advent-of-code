import input from './files/input-day-04'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.trim().split('\n')

const solvePartOne = (items: string[], range: number[]): number =>
  items.filter((item) => {
    const [first, second] = item.split(',')
    const [fp1, fp2] = first.split('-')
    const [sp1, sp2] = second.split('-')
    const leftRange = range.slice(+fp1 - 1, +fp2)
    const rightRange = range.slice(+sp1 - 1, +sp2)

    return (
      (leftRange[0] >= rightRange[0] &&
        leftRange[leftRange.length - 1] <= rightRange[rightRange.length - 1]) ||
      (rightRange[0] >= leftRange[0] &&
        rightRange[rightRange.length - 1] <= leftRange[leftRange.length - 1])
    )
  }).length

const solvePartTwo = (items: string[], range: number[]): number =>
  items.filter((item) => {
    const [first, second] = item.split(',')
    const [fp1, fp2] = first.split('-')
    const [sp1, sp2] = second.split('-')
    const leftRange = range.slice(+fp1 - 1, +fp2)
    const rightRange = range.slice(+sp1 - 1, +sp2)

    return leftRange.length >= rightRange.length
      ? leftRange.some((v) => rightRange.includes(v))
      : rightRange.some((v) => leftRange.includes(v))
  }).length

function getArrayOfNumbers(arr: string[]) {
  const nums = arr
    .join(',')
    .replace(/-/g, ',')
    .split(',')
    .map((v) => +v)
    .sort((a, b) => a - b)
  const unique = Array.from(new Set(nums))
  const [, high] = [unique[0], unique[unique.length - 1]]
  return Array.from({ length: high }, (_, i) => i + 1)
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines, getArrayOfNumbers(lines))
  const answerPartTwo = solvePartTwo(lines, getArrayOfNumbers(lines))

  printResult(answerPartOne, 2022, 3, 1)
  printResult(answerPartTwo, 2022, 3, 2)
}
