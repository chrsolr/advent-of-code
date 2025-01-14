import { input, test } from './files/input-day-01'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\n')

const splitter = (lines: string[]): Record<string, number[]> => {
  const left = []
  const right = []

  for (const line of lines) {
    const [l, r] = line.split(' ').filter(Boolean)

    left.push(Number(l))
    right.push(Number(r))
  }

  return { left: left.sort(), right: right.sort() }
}

const solvePartOne = (lines: string[]): number => {
  const { left, right } = splitter(lines)

  return left.reduce(
    (memo: number, current: number, index: number) =>
      (memo += Math.abs(current - right[index])),
    0,
  )
}

const solvePartTwo = (lines: string[]): number => {
  const { left, right } = splitter(lines)

  return left.reduce((memo: number, current: number) => {
    let occurance = 0

    for (const num of right) {
      if (current !== num) {
        continue
      }

      ++occurance
    }

    memo += Math.abs(current * occurance)
    return memo
  }, 0)
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2024, 1, 1)
  printResult(answerPartTwo, 2024, 1, 2)
}
