import input from './files/input-day-01'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\n')

const keywords = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const recursive = (
  previousChar: string,
  chars: string[] = [],
  memo: string[] = [],
): string[] => {
  if (chars.length === 0) {
    return memo
  }

  const currentChar = chars.shift() ?? ''

  if (!isNaN(Number(currentChar))) {
    memo.push(currentChar)
    return recursive(currentChar, chars, memo)
  }

  const combinedChars = `${previousChar}${currentChar}`
  const keywordIndex = keywords.findIndex((key) => combinedChars.includes(key))

  if (keywordIndex > -1) {
    memo.push((keywordIndex + 1).toString())
    return recursive(currentChar, chars, memo)
  }

  return recursive(combinedChars, chars, memo)
}

const partOneReducer = (memo: number, line: string) => {
  const numbers = []

  for (const char of line) {
    if (!isNaN(Number(char))) {
      numbers[numbers.length ? 1 : 0] = char
    }
  }

  const firstNumber = numbers[0]
  const lastNumber = numbers[numbers.length - 1]

  return memo + Number(`${firstNumber}${lastNumber}`)
}

const partTwoReducer = (memo: number, line: string) => {
  const numbers = recursive('', line.split(''))

  const firstNumber = numbers[0]
  const lastNumber = numbers[numbers.length - 1]

  return memo + Number(`${firstNumber}${lastNumber}`)
}

const solve = (
  lines: string[],
  reducer: (memo: number, line: string) => number,
): number => lines.reduce(reducer, 0)

export default () => {
  const lines = getInputData()

  const answerPartOne = solve(lines, partOneReducer)
  const answerPartTwo = solve(lines, partTwoReducer)

  printResult(answerPartOne, 2023, 1, 1)
  printResult(answerPartTwo, 2023, 1, 2)
}
