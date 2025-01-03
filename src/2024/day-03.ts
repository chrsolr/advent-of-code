import { input, test, test_2 } from './files/input-day-03'
import { printResult } from '../shared/utils'

const getInputData = (): string => input

const getExpression = (
  input: string,
  regex = /mul\((\d+),(\d+)\)/g,
): string[] => [...input.matchAll(regex)].map((match) => match[0])

const calculate = (items: string[]) =>
  items.reduce((memo, current) => {
    const [a, b] = current
      .replaceAll('mul(', '')
      .replaceAll(')', '')
      .split(',')
      .map(Number)

    return a * b + memo
  }, 0)

const solvePartOne = (lines: string[]) => calculate(lines)

const solvePartTwo = (text: string) => {
  const regex = /(?=\w*don't\(\)\w*)|(?=do\(\))/

  const filteredItems = getExpression(
    text
      .split(regex)
      .filter((v) => !v.includes("don't"))
      .join(''),
  )

  return calculate(filteredItems)
}

export default () => {
  const data = getInputData()

  const answerPartOne = solvePartOne(getExpression(data))
  const answerPartTwo = solvePartTwo(data)

  printResult(answerPartOne, 2024, 3, 1)
  printResult(answerPartTwo, 2024, 3, 2)
}
