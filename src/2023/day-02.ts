import input, { example } from './files/input-day-02'
import { printResult } from '../shared/utils'

type Color = 'red' | 'green' | 'blue'

const getInputData = (): string[] => (example || input).split('\n')

const maxCube = new Map<Color, number>([
  ['red', 12],
  ['green', 13],
  ['blue', 14],
])

// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
const partOneReducer = (line: string) => {
  const captures = line.match(/(Game [0-9]+: )|([^;]*)/g) || []
  const [, ...sets] = captures.filter((v) => v).map((v) => v.trim())

  for (const set of sets) {
    const cubes = set.split(', ')
    let isValid = true

    for (const cube of cubes) {
      const [num, color] = cube.split(' ') as Color[]
      const max = maxCube.get(color) ?? 0

      if (Number(num) > max) {
        isValid = false
        break
      }
    }

    if (!isValid) {
      return false
    }
  }

  return true
}

const solvePartOne = (lines: string[]) =>
  lines.reduce(
    (memo, line, index) => (partOneReducer(line) ? memo + index + 1 : memo),
    0,
  )

const solvePartTwo = (lines: string[]) => {
  return lines.length
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 2, 1)
  printResult(answerPartTwo, 2023, 2, 2)
}
