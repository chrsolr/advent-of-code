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

const calculatePartTwo = (line: string[]): string[] => {
  const memo: string[] = []
  let previousChar = ''

  while (line.length > 0) {
    const currentChar = line.shift() ?? ''

    if (!isNaN(Number(currentChar))) {
      memo.push(currentChar)
    } else {
      const combinedChars = `${previousChar}${currentChar}`
      const keywordIndex = keywords.findIndex((key) =>
        combinedChars.includes(key),
      )

      if (keywordIndex > -1) {
        memo.push((keywordIndex + 1).toString())
      }

      previousChar = keywordIndex > -1 ? currentChar : combinedChars
    }
  }

  return [memo[0], memo[memo.length - 1]]
}

const partOneReducer = (memo: number, line: string) => {
  const length = line.length
  let firstNumber = ''
  let lastNumber = ''

  for (let i = 0; i < length; i++) {
    if (!isNaN(Number(line[i]))) {
      firstNumber = line[i]
      break
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    if (!isNaN(Number(line[i]))) {
      lastNumber = line[i]
      break
    }
  }

  return memo + Number(`${firstNumber}${lastNumber}`)
}

const partTwoReducer = (memo: number, line: string) => {
  const [firstNumber, lastNumber] = calculatePartTwo(line.split(''))
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
