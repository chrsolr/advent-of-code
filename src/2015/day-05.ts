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
  const chars = line.split('')
  const mapper: Record<string, boolean> = {}
  let hasFirstRequirement = false
  let hasSecondRequirement = false
  let doesRequirementsOverlapped = false
  let keyOne = ''
  let keyTwo = ''

  for (let i = 0; i < chars.length; i++) {
    const [first, second, third] = chars.slice(i, i + 3)
    const firstRequirementKey = `${first}${second ? second : ''}`
    const secondRequirementKey = `${first}${second ? second : ''}${
      third ? third : ''
    }`

    mapper[firstRequirementKey] = mapper[firstRequirementKey] !== undefined

    if (mapper[firstRequirementKey]) {
      keyOne = firstRequirementKey
      hasFirstRequirement = true
    }

    if (first !== second && first === third) {
      keyTwo = secondRequirementKey
      hasSecondRequirement = true
    }

    if (keyOne.split('').some((v) => keyTwo.includes(v))) {
      doesRequirementsOverlapped = true
      break
    }
  }

  return (
    !doesRequirementsOverlapped && hasFirstRequirement && hasSecondRequirement
  )

  // const chars = line.split('')
  // const mapper: Record<string, boolean> = {}
  // let hasFirstRequirement = false
  // let hasSecondRequirement = false
  // let hasOverlap = false
  // let oneKey = ''
  // let twoKey = ''
  //
  // for (let i = 0; i < chars.length; i++) {
  // const current = chars[i]
  // const next = chars[i + 1]
  // const third = chars[i + 2]
  // const key = `${current}${next ? next : ''}`
  //
  // mapper[key] = mapper[key] !== undefined
  //
  // if (mapper[key]) {
  //   oneKey = key
  //   hasFirstRequirement = true
  // }
  //
  // if (current === next && next === third) {
  //   break
  // }
  //
  // twoKey = `${current}${next}${third}`
  // if (oneKey.split('').some((v) => twoKey.includes(v))) {
  //   hasOverlap = true
  //   break
  // }
  //
  // if (current !== next && current === third) {
  //   hasSecondRequirement = true
  // }
  //
  // if (hasFirstRequirement && hasSecondRequirement) {
  //   break
  // }
  // }

  // return hasFirstRequirement && hasSecondRequirement && !hasOverlap
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

    console.log({ l, t: isNice })
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
