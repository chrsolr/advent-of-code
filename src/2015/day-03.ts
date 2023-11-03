/**
 * Day 03
 * Instructions: https://adventofcode.com/2015/day/3
 */
import { getInputData } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/3'

async function getData() {
  const lines = await getInputData('2015/files/2015_day_3_input.txt')
  return lines.filter((v) => v)
}

function printResult(answer: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 3 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Answer Score:', answer)
}

export async function solvePartOne(data: string[]) {
  return 0
}

export async function day3_PartOne_2015() {
  const lines = await getData()
  const answer = await solvePartOne(lines)
  printResult(answer, 1)
}
