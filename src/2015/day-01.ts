/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/1'

export async function runPartOne() {
  const exampleInput = ``.split('\n').filter((v) => v)

  const filepath = path.join(__dirname, 'files/2015_day_1_input.txt')
  const lines = (await readFileLineByLine(filepath)).filter((v) => v)

  const example = 0
  const answer = 0

  return [example, answer]
}

export async function runPartTwo() {
  const exampleInput = ``.split('\n').filter((v) => v)

  const filepath = path.join(__dirname, 'files/2015_day_1_input.txt')
  const lines = (await readFileLineByLine(filepath)).filter((v) => v)

  const example = 0
  const answer = 0

  return [example, answer]
}

export async function day1_PartOne_2015() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 1 of 2015 (Part #1)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const [example, answer] = await runPartOne()

  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}

export async function day2_PartTwo_2015() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 1 of 2015 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const [example, answer] = await runPartTwo()

  console.info('Total Example Score:', example)
  console.info('Total Answer Score:', answer)
}
