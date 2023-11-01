/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/1'

async function getInputData() {
  const filepath = path.join(__dirname, 'files/2015_day_1_input.txt')
  const [line] = (await readFileLineByLine(filepath)).filter((v) => v)
  return line
}

function calculateFloor(text: string, find?: number | undefined) {
  let total = 0
  let position = 0

  for (const value of text.split('')) {
    total += value === '(' ? 1 : -1
    position++

    if (find && total === find) {
      break
    }
  }

  return { total, position }
}

export async function solvePartOne(
  exampleInput: string,
): Promise<{ example: number; answer: number }> {
  const line = await getInputData()

  const example = calculateFloor(exampleInput)
  const answer = calculateFloor(line)

  return { example: example.total, answer: answer.total }
}

function printResult(example: number, answer: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 1 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}

export async function solvePartTwo(
  exampleInput: string,
): Promise<{ example: number; answer: number }> {
  const line = await getInputData()
  const example = calculateFloor(exampleInput, -1)
  const answer = calculateFloor(line, -1)

  return { example: example.position, answer: answer.position }
}

export async function day1_PartOne_2015() {
  const { example, answer } = await solvePartOne('(()(()(')
  printResult(example, answer, 1)
}

export async function day1_PartTwo_2015() {
  const { example, answer } = await solvePartTwo('()())')
  printResult(example, answer, 2)
}
