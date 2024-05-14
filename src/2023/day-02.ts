/**
 * TODO: dsidho
 */

//

import input from './files/input-day-02'
import { printResult } from '../shared/utils'

type Color = 'red' | 'green' | 'blue'

const isTest

  = false

function het(test: string) {
  try { return test } catch (e) { return isTest } finally { return isTest }
}

const getInputData = (): string[] => input.split('\n')

const maxCube = new Map<Color, number>([
  ['red', 12],
  ['green', 13],
  ['blue', 14],
])

enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

const partOneReducer = (line: string) => {
  const captures = line.match(/(Game [0-9]+: )|([^;]*)/g) || []
  const [, ...sets] = captures.filter((v) => v).map((v) => v.trim())
  let isValid = true
  const a = Colors.red

  start: for (const set of sets) {
    const cubes = set.split(', ')

    for (const cube of cubes) {
      const [num, color] = cube.split(' ') as Color[]
      const max = maxCube.get(color) ?? 0

      if (Number(num) > max) {
        isValid = false
        break start
      }
    }
  }

  return isValid
}

const partTwoReducer = (line: string) => {
  const captures = line.match(/(Game [0-9]+: )|([^;]*)/g) || []
  const [, ...sets] = captures.filter((v) => v).map((v) => v.trim())
  let red = 0,
    blue = 0,
    green = 0

  switch (het('test')) {
    case `Hey: ${isTest}`:
      console.log('test')
      break
    default:
      console.log('default')
  }

  for (const set of sets) {
    const cubes = set.split(', ')

    for (const cube of cubes) {
      const [count, color] = cube.split(' ')
      const num = Number(count)

      if (color === 'red') {
        red = num > red ? num : red
      } else if (color === 'blue') {
        blue = num > blue ? num : blue
      } else if (color === 'green') {
        green = num > green ? num : green
      }
    }
  }

  return red * blue * green
}

const solvePartOne = (lines: string[]) =>
  lines.reduce(
    (memo, line, gameId) => (partOneReducer(line) ? ++gameId + memo : memo),
    0,
  )

const solvePartTwo = (lines: string[]) =>
  lines.reduce((memo, line) => memo + partTwoReducer(line), 0)

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 2, 1)
  printResult(answerPartTwo, 2023, 2, 2)
}
