/**
 * Day 01
 * Instructions: https://adventofcode.com/2022/day/1
 * Answer: 69206
 */
import fs from 'fs'
import readline from 'readline'
import path from 'path'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/1'

export async function partOne() {
  console.info('Advent of Code: Day 1 of 2022')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const filepath = path.join(__dirname, 'files/2022_day_1_input.txt')
  const lines = await readFileLineByLine(filepath)

  // loop through array of strings
  // if item is not undefined
  // - convert to number
  // - sum until a falsy item is found
  // - check if sum is larger than answer variable
  // - replace answer if it is
  // repeat until end

  let answer = 0
  let holder = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line) {
      const value = Number(line)
      holder += value
    } else {
      answer = holder > answer ? holder : answer
      holder = 0
    }

    // console.info({ line, holder, answer })
  }

  console.log('Answer:', answer)
}

async function readFileLineByLine(filepath: string) {
  const fileStream = fs.createReadStream(filepath)
  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const lines = []
  for await (const line of lineReader) {
    lines.push(line)
  }

  return lines
}
