import input from './files/input-day-05'
import { printResult } from '../shared/utils'

/**
 * Day 05
 * Instructions: https://adventofcode.com/2015/day/5
 */

const lines = input.split('\n').filter((value) => value)
const vowels: Record<string, string> = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
}
const exclusion: Record<string, string> = {
  ab: 'ab',
  cd: 'cd',
  pq: 'pq',
  xy: 'xy',
}

function isNicePartOne(line: string) {
  const chars = line.split('')
  let amountOfVowelsFound = 0
  let appearsTwice = false
  let isNaughty = false

  for (const i in chars) {
    const index = Number(i)
    const value = chars[index]
    const nextValue = chars[index + 1]

    if (exclusion[`${value}${nextValue}`]) {
      isNaughty = true
      break
    }

    if (amountOfVowelsFound < 3 && vowels[value]) {
      amountOfVowelsFound++
    }

    if (!appearsTwice) {
      appearsTwice = value === nextValue
    }
  }

  return !isNaughty && amountOfVowelsFound === 3 && appearsTwice
}

function isNicePartTwo(line: string) {
  let hasPair = false
  for (let i = 0; i < line.length; i++) {
    const [first, second] = line.slice(i, i + 3)
    const key = `${first}${second ? second : ''}`

    if (line.indexOf(key, i + 2) !== -1) {
      hasPair = true
      break
    }
  }

  if (!hasPair) {
    return false
  }

  for (let i = 0; i < line.length; i++) {
    const [first, , third] = line.slice(i, i + 3)

    if (first === third) {
      return true
    }
  }

  return false
}

export function solvePartOne(lines: string[]) {
  let count = 0

  for (const l of lines) {
    if (isNicePartOne(l)) {
      count++
    }
  }

  return count
}

export function solvePartTwo(lines: string[]) {
  let count = 0

  for (const l of lines) {
    const isNice = isNicePartTwo(l)
    if (isNice) {
      count++
    }
  }

  return count
}

export function day5_PartOne_2015() {
  const answerOne = solvePartOne(lines)
  printResult(answerOne, 2015, 5, 1)

  const answerTwo = solvePartTwo(lines)
  printResult(answerTwo, 2015, 5, 2)
}
