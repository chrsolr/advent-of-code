import * as crypto from 'crypto'

/**
 * Day 04
 * Instructions: https://adventofcode.com/2015/day/4
 */
const INSTRUCTIONS_LINK = 'https://adventofcode.com/2015/day/4'

function printResult(hash: string, count: number, part: number): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day 4 of 2015 (Part #${part})`)
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)
  console.info('Total Answer Score:', `${count} (${hash})`)
}

function calculateMD5Hash(input: string): string {
  const md5Hash = crypto.createHash('md5')
  md5Hash.update(input)
  return md5Hash.digest('hex')
}

export function solve(
  secret: string,
  searchText: string,
): {
  count: number
  hash: string
} {
  let hash = ''
  let matched = false
  let count = 0

  while (!matched) {
    const key = `${secret}${count}`
    const md5 = calculateMD5Hash(key)
    matched = md5.startsWith(searchText)

    if (matched) {
      hash = md5
      break
    }

    count++
  }
  return { count, hash }
}

export async function day4_PartOne_2015() {
  const { count, hash } = solve('ckczppom', '00000')
  printResult(hash, count, 1)
}

export async function day4_PartTwo_2015() {
  const { count, hash } = solve('ckczppom', '000000')
  printResult(hash, count, 1)
}
