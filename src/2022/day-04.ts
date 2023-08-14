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

  console.info(
    'Total Example Score:',
    getOverlapsForPartOne(exampleInput, getArrayOfNumbers(exampleInput)),
  )
  console.info(
    'Total Answer Score:',
    getOverlapsForPartOne(lines, getArrayOfNumbers(lines)),
  )
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

  console.info(
    'Total Example Score:',
    getOverlapsForPartTwo(exampleInput, getArrayOfNumbers(exampleInput)),
  )
  console.info(
    'Total Answer Score:',
    getOverlapsForPartTwo(lines, getArrayOfNumbers(lines)),
  )
}

function getOverlapsForPartOne(items: string[], range: number[]) {
  const overlaps = items.filter((item) => {
    const [first, second] = item.split(',')
    const [fp1, fp2] = first.split('-')
    const [sp1, sp2] = second.split('-')
    const leftRange = range.slice(+fp1 - 1, +fp2)
    const rightRange = range.slice(+sp1 - 1, +sp2)

    return (
      (leftRange[0] >= rightRange[0] &&
        leftRange[leftRange.length - 1] <= rightRange[rightRange.length - 1]) ||
      (rightRange[0] >= leftRange[0] &&
        rightRange[rightRange.length - 1] <= leftRange[leftRange.length - 1])
    )
  })

  return overlaps.length
}

function getOverlapsForPartTwo(items: string[], range: number[]) {
  const overlaps = items.filter((item) => {
    const [first, second] = item.split(',')
    const [fp1, fp2] = first.split('-')
    const [sp1, sp2] = second.split('-')
    const leftRange = range.slice(+fp1 - 1, +fp2)
    const rightRange = range.slice(+sp1 - 1, +sp2)

    return leftRange.length >= rightRange.length
      ? leftRange.some((v) => rightRange.includes(v))
      : rightRange.some((v) => leftRange.includes(v))
  })

  return overlaps.length
}

function getArrayOfNumbers(arr: string[]) {
  const nums = arr
    .join(',')
    .replace(/-/g, ',')
    .split(',')
    .map((v) => +v)
    .sort((a, b) => a - b)
  const unique = Array.from(new Set(nums))
  const [, high] = [unique[0], unique[unique.length - 1]]
  return Array.from({ length: high }, (_, i) => i + 1)
}
