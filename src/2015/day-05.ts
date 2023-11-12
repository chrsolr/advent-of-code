import input from './files/input-day-05'
import { printResult } from '../shared/utils'

/**
 * Day 05
 * Instructions: https://adventofcode.com/2015/day/5
 */

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u'
type Exclusion = 'ab' | 'cd' | 'pq' | 'xy'

const lines = input.split('\n').filter((value) => value)
const vowels: Record<string, Vowels> = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
}

const exclusion: Record<string, Exclusion> = {
  ab: 'ab',
  cd: 'cd',
  pq: 'pq',
  xy: 'xy',
}

const isNicePartOne = (line: string): boolean => {
  const chars = line.split('')
  let amountOfVowelsFound = 0
  let appearsTwice = false

  for (const i in chars) {
    const index = Number(i)
    const value = chars[index]
    const nextValue = chars[index + 1]

    if (exclusion[`${value}${nextValue}`]) {
      return false
    }

    if (amountOfVowelsFound < 3 && vowels[value]) {
      amountOfVowelsFound++
    }

    if (!appearsTwice) {
      appearsTwice = value === nextValue
    }

    if (amountOfVowelsFound === 3 && appearsTwice) {
      return true
    }
  }

  return false
}

const isNicePartTwo = (line: string): boolean => {
  let hasPair = false
  let hasCharInBetweenPair = false

  for (let i = 0; i < line.length; i++) {
    const [first, second, third] = line.slice(i, i + 3)
    const key = `${first}${second ? second : ''}`

    if (line.indexOf(key, i + 2) !== -1) {
      hasPair = true
    }

    if (!hasCharInBetweenPair && first === third) {
      hasCharInBetweenPair = true
    }

    if (hasPair && hasCharInBetweenPair) {
      return true
    }
  }

  return false
}

const solve = (lines: string[], cb: (line: string) => boolean): number =>
  lines.reduce((memo, current) => (cb(current) ? memo + 1 : memo), 0)

export default () => {
  const answerPartOne = solve(lines, isNicePartOne)
  const answerPartTwo = solve(lines, isNicePartTwo)

  printResult(answerPartOne, 2015, 5, 1)
  printResult(answerPartTwo, 2015, 5, 2)
}
