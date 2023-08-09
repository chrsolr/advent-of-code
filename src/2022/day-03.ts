/**
 * Day 03
 * Instructions: https://adventofcode.com/2022/day/3
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/3'

type Alphabet = [string, number]

const lowerAlphabet = Array.from({ length: 26 }, (_, i) => [
  String.fromCharCode(97 + i),
  i + 1,
])
const upperAlphabet = Array.from({ length: 26 }, (_, i) => [
  String.fromCharCode(65 + i),
  i + 27,
])
const alphabet = [...lowerAlphabet, ...upperAlphabet] as Alphabet[]

export async function day3_PartOne_2022() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 3 of 2022 (Part #1)')
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

  console.info('Total Example Score:', calculateScoreForPartOne(exampleInput))
  console.info('Total Answer Score:', calculateScoreForPartOne(lines))
}

export async function day3_PartTwo_2022() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 3 of 2022 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  // group every 3 lines
  // find letter that is in each line
  // letter = score for the group
  // sum all groups

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

  console.info('Total Example Score:', calculateScoreForPartTwo(exampleInput))
  console.info('Total Answer Score:', calculateScoreForPartTwo(lines))
}

function calculateScoreForPartOne(lines: string[]) {
  let total = 0

  for (const line of lines) {
    const index = line.length / 2
    const [first, second] = [line.substring(0, index), line.substring(index)]
    let toNextLine = false

    for (let i = 0; i < first.length; i++) {
      if (toNextLine) {
        break
      }

      for (let j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
          const [, score] = alphabet.find((v) => v[0] === first[i]) || ['', 0]
          total += score
          toNextLine = true
          break
        }
      }
    }
  }
  return total
}

function calculateScoreForPartTwo(lines: string[]) {
  const groupByLengthOf = 3
  let groupHolder = []
  let total = 0

  for (const line of lines) {
    groupHolder.push(line)

    if (groupHolder.length === groupByLengthOf) {
      const [first, second, thrid] = groupHolder

      const matches = first.split('').map((letter) => ({
        letter,
        matched: second.includes(letter) && thrid.includes(letter),
      }))

      const [badge] = Array.from(
        new Set(matches.filter((v) => v.matched).map((v) => v.letter)),
      )
      const [, score] = alphabet.find((v) => v[0] === badge) || ['', 0]
      total += score
      groupHolder = []
    }
  }

  return total
}
