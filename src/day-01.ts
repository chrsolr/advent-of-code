/**
 * Day 01
 * Instructions: https://adventofcode.com/2022/day/1
 * Top #3: { one: 69206, two: 65317, three: 62877 }
 * Part #1 Answer: 69206
 * Part #2 Answer: 197400
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

  const calories: number[] = []
  let answer = 0
  let holder = 0

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

  console.log('Top #3:', { one, two, three })
  console.log('Part #1 Answer:', one)
  console.log('Part #2 Answer:', one + two + three)
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
