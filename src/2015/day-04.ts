import * as crypto from 'crypto'

/**
 * Day 04
 * Instructions: https://adventofcode.com/2015/day/4
 */
const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/4'

function printResult(count: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 4 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Answer Score:', count)
}

function calculateMD5Hash(input: string): string {
  const md5Hash = crypto.createHash('md5')
  md5Hash.update(input)
  return md5Hash.digest('hex')
}

export function solve(secret: string, searchTerm: string): number {
  let count = 0

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const key = `${secret}${count}`
    const md5 = calculateMD5Hash(key)
    const matched = md5.startsWith(searchTerm)

    if (matched) {
      return count
    }

    count++
  }
}

export async function day4_PartOne_2015() {
  const answer = solve('ckczppom', '00000')
  printResult(answer, 1)
}

export async function day4_PartTwo_2015() {
  const answer = solve('ckczppom', '000000')
  printResult(answer, 2)
}
