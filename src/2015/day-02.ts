/**
 * Day 02
 * Instructions: https://adventofcode.com/2015/day/2
 */
import { getInputData } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/2'

async function getData() {
  const lines = await getInputData('2015/files/2015_day_2_input.txt')
  return lines.filter((v) => v)
}

function getDimensions(calculation: string): {
  length: number
  width: number
  height: number
} {
  const [length, width, height] = calculation.split('x').map(Number)
  return { length, width, height }
}

function printResult(answer: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 2 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Answer Score:', answer)
}

export async function solvePartOne(data: string[]) {
  // 2*l*w + 2*w*h + 2*h*l + smallest side
  // example: (2x3x4) => 2*6 + 2*12 + 2*8 = (52 + 6) = 58
  // or 2 * (6 + 12 + 8) + 6

  return data.reduce((memo, current) => {
    const { length, width, height } = getDimensions(current)

    const sideOne = length * width
    const sideTwo = width * height
    const sideThree = height * length
    const lowest = Math.min(sideOne, sideTwo, sideThree)

    const total = 2 * (sideOne + sideTwo + sideThree) + lowest
    return memo + total
  }, 0)
}

export async function solvePartTwo(data: string[]) {
  return data.reduce((memo, current) => {
    const { length, width, height } = getDimensions(current)

    const [shortSideOne, shortSideTwo] = [length, width, height].sort(
      (a, b) => a - b,
    )

    const ribbon = shortSideOne * 2 + shortSideTwo * 2
    const wrap = length * width * height
    const total = wrap + ribbon

    return memo + total
  }, 0)
}

export async function day2_PartOne_2015() {
  const lines = await getData()
  const answer = await solvePartOne(lines)
  printResult(answer, 1)
}

export async function day2_PartTwo_2015() {
  const lines = await getData()
  const answer = await solvePartTwo(lines)
  printResult(answer, 2)
}
