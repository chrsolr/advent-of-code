/**
 * Day 04
 * Instructions: https://adventofcode.com/2022/day/4
 */
import path from 'path'
import { readFileLineByLine } from '../shared/utils'

const INSTRUCTIONS_LINK = 'https://adventofcode.com/2022/day/4'

export async function day4_PartOne_2022() {
  console.info('***************************************************')
  console.info('Advent of Code: Day 4 of 2022 (Part #1)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `
    2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_4_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())

  // 1- get all unique numbers
  // 2- create array of numbers length from the lowest to highest
  // 3- convert each pair to range that contain each possible number
  // 4- compare each array to each other with the shorter array been the first
  // 5- Look up an algorhythm is good for this (after part 2)

  const nums = getArrayOfNumbers(exampleInput)
  func(exampleInput, nums)
}

export async function day4_PartTwo_2022() {
  console.info('---------------------------------------------------')
  console.info('Advent of Code: Day 4 of 2022 (Part #2)')
  console.info(`Instruction @: ${INSTRUCTIONS_LINK}`)

  const exampleInput = `
    2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`
    .split('\n')
    .filter((v) => v)
    .map((v) => v.trim())

  const filepath = path.join(__dirname, 'files/2022_day_4_input.txt')
  const lines = (await readFileLineByLine(filepath))
    .filter((v) => v)
    .map((v) => v.trim())
}

function func(items: string[], range: number[]) {
  console.log(items, range)

  for (const item of items) {
    const [first, second] = item.split(',')
    const [fp1, fp2] = first.split('-')
    const [sp1, sp2] = second.split('-')
    const leftRange = range.slice(+fp1 - 1, +fp2)
    const rightRange = range.slice(+sp1 - 1, +sp2)
    console.log({ first, second, leftRange, rightRange })
  }
}

function getArrayOfNumbers(arr: string[]) {
  const nums = [...arr.join(',').replace(/-/g, ',')]
    .filter((v) => v !== ',')
    .map((v) => +v)
    .sort()
  const [, high] = [nums[0], nums[nums.length - 1]]
  return Array.from({ length: high }, (_, i) => i + 1)
}
