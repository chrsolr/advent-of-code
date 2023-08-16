/**
 * Day 05
 * Instructions: https://adventofcode.com/2022/day/5
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/5'

export async function day5_PartOne_2022() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 5 of 2022 (Part #1)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `
        [D]    
    [N] [C]    
    [Z] [M] [P]
    1   2   3 

    move 1 from 2 to 1
    move 3 from 1 to 3
    move 2 from 2 to 1
    move 1 from 1 to 2`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_5_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  console.info('Total Example Score:')
  console.info('Total Answer Score:')
}

export async function day5_PartTwo_2022() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 5 of 2022 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `
        [D]    
    [N] [C]    
    [Z] [M] [P]
    1   2   3 

    move 1 from 2 to 1
    move 3 from 1 to 3
    move 2 from 2 to 1
    move 1 from 1 to 2`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_5_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  console.info('Total Example Score:')
  console.info('Total Answer Score:')
}
