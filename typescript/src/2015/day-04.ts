import * as crypto from 'crypto'
import { printResult } from '../shared/utils'

/**
 * Day 04
 * Instructions: https://adventofcode.com/2015/day/4
 */

const calculateMD5Hash = (input: string): string =>
  crypto.createHash('md5').update(input).digest('hex')

const solve = (secret: string, searchTerm: string): number => {
  let matched = false
  let count = 0

  while (!matched) {
    count++
    matched = calculateMD5Hash(`${secret}${count}`).startsWith(searchTerm)
  }

  return count
}

export default () => {
  const answerPartOne = solve('ckczppom', '00000')
  const answerPartTwo = solve('ckczppom', '000000')

  printResult(answerPartOne, 2015, 4, 1)
  printResult(answerPartTwo, 2015, 4, 2)
}
