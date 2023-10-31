/**
 * Day 01
 * Instructions: https://adventofcode.com/2022/day/1
 * Top #3: { one: 69206, two: 65317, three: 62877 }
 * Part #1 Answer: 69206
 * Part #2 Answer: 197400
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/1'

export async function run() {
  const filepath = path.join(__dirname, 'files/2022_day_1_input.txt')
  const lines = await readFileLineByLine(filepath)

  let answer = 0
  let holder = 0
  const calories: number[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line) {
      const value = Number(line)
      holder += value
      continue
    }

    answer = holder > answer ? holder : answer
    holder = 0

    if (answer !== calories[calories.length - 1]) {
      calories.push(answer)
    }
  }

  const [one, two, three] = calories.reverse()
  return [one, one + two + three]
}

export async function day1_2022() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 1 of 2022')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  return run()
}
