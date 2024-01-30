import input, { examples } from './files/input-day-01'
import { printResult } from '../shared/utils'

const index = 2

const getInputData = (): string[] =>
  // (examples[index].input || input).trim().split(', ')
  input.trim().split(', ')

const solvePartOne = (moves: string[]): number => {
  const coords = { x: 0, y: 0 }

  for (let i = 0; i < moves.length; i++) {
    const isEven = i % 2 === 0
    const [direction, ...rest] = moves[i]
    const moveAmount = Number(rest.join(''))

    console.log({ direction, moveAmount })

    if (isEven && direction === 'R') {
      coords.x += moveAmount
    }

    if (isEven && direction === 'L') {
      coords.x -= moveAmount
    }

    if (!isEven && direction === 'R') {
      coords.y -= moveAmount
    }

    if (!isEven && direction === 'L') {
      coords.y += moveAmount
    }
  }

  console.log('Coordinates:', `(${coords.x},${coords.y})`)
  return coords.x + coords.y
}

const solvePartTwo = (chars: string[]): number => {
  return 0
}

export default () => {
  const inputData = getInputData()

  const answerPartOne = solvePartOne(inputData)
  const answerPartTwo = solvePartTwo(inputData)

  printResult(answerPartOne, 2016, 1, 1)
  printResult(answerPartTwo, 2016, 1, 2)
}
