/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/1'

function solve(text: string, find?: number | undefined) {
  let total = 0
  let position = 0
  const str = text.split('')

  for (let i = 0; i < str.length; i++) {
    const value = str[i]
    total = value === '(' ? total + 1 : total - 1
    ++position

    if (find && total === find) {
      break
    }
  }

  return { total, position }
}

export async function runPartOne(exampleInput = '(()(()(') {
  const filepath = path.join(__dirname, 'files/2015_day_1_input.txt')
  const [line] = (await readFileLineByLine(filepath)).filter((v) => v)

  const example = solve(exampleInput)
  const answer = solve(line)

  return [example.total, answer.total]
}

export async function runPartTwo(exampleInput = '()())') {
  const filepath = path.join(__dirname, 'files/2015_day_1_input.txt')
  const [line] = (await readFileLineByLine(filepath)).filter((v) => v)

  const example = solve(exampleInput, -1)
  const answer = solve(line, -1)

  return [example.position, answer.position]
}

export async function day1_PartOne_2015() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 1 of 2015 (Part #1)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const [example, answer] = await runPartOne()

  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}

export async function day1_PartTwo_2015() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 1 of 2015 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const [example, answer] = await runPartTwo()

  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}
