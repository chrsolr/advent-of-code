/**
 * Day 03
 * Instructions: https://adventofcode.com/2022/day/3
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/3'

export async function day3_PartOne_2022() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 3 of 2022 (Part #1)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const lowerAlphabet = Array.from({ length: 26 }, (_, i) => [
    String.fromCharCode(97 + i),
    i + 1,
  ])
  const upperAlphabet = Array.from({ length: 26 }, (_, i) => [
    String.fromCharCode(65 + i),
    i + 27,
  ])
  const alphabet = [...lowerAlphabet, ...upperAlphabet]

  const exampleInput = `
    vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    ttgJtRGJQctTZtZT
    CrZsJsPPZsGzwwsLwLmpwMDw`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_3_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  console.log({ exampleInput, lines, alphabet })
}

export async function day3_PartTwo_2022() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 3 of 2022 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `
    vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    ttgJtRGJQctTZtZT
    CrZsJsPPZsGzwwsLwLmpwMDw`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_3_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  console.log({ exampleInput, lines })
}
