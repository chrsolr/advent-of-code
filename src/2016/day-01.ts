import { printResult } from '../shared/utils'
import input from './files/input-day-01'

const lines = ('R2, R2, R2' || input).split(', ')

const solvePartOne = (instructions: string[]) => {
  const coordinates = { x: 0, y: 0 }
  let x = true

  for (const instruction of instructions) {
    const [direction, steps] = instruction

    if (x) {
      coordinates.x += Number(steps)
    } else {
      coordinates.y += Number(steps)
    }

    x = !x
  }

  return coordinates.x + coordinates.y
}

export default () => {
  throw new Error('Not implemented yet.')

  const answerOne = solvePartOne(lines)
  const answerTwo = solvePartOne(lines)

  printResult(answerOne, 2016, 1, 1)
  printResult(answerTwo, 2016, 1, 1)
}
