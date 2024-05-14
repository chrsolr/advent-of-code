import input, { example } from './files/input-day-03'
import { printResult } from '../shared/utils'

const getInputData = (): string[] =>
  (example || input)
    .split('\n')
    .filter((line) => line)
    .slice(0, 1)

const isNumber = (character: string) => !isNaN(+character)

const createMap = (lines: string[]) => {
  const map = []

  for (const line of lines) {
    let digits = ''
    let coords = []

    let x = 0
    let y = 0

    for (const char of line) {
      if (isNumber(char)) {
        digits += char
        coords.push(`${x},${y}`)
      } else {
        map.push({
          digits,
          coords,
        })
        digits = ''
      }
      x++
    }

    y++

    console.log(map)
  }
}

const solvePartOne = (lines: string[]) => {
  const map = createMap(lines)

  return lines.length
}

const solvePartTwo = (lines: string[]) => {
  return lines.length
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 3, 1)
  printResult(answerPartTwo, 2023, 3, 2)
}
