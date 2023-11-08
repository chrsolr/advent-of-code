import {
  solvePartOne as day_1_partone_2015,
  solvePartTwo as day_1_parttwo_2015,
} from './day-01'
import {
  solvePartOne as day_2_partone_2015,
  solvePartTwo as day_2_parttwo_2015,
} from './day-02'
import {
  Direction,
  solvePartOne as day_3_partone_2015,
  solvePartTwo as day_3_parttwo_2015,
} from './day-03'
import { solve as day_4_2015 } from './day-04'
import {
  solvePartOne as day5_PartOne_2015,
  solvePartTwo as day5_PartTwo_2015,
} from './day-05'
import {
  solvePartOne as day6_PartOne_2015,
  solvePartTwo as day6_PartTwo_2015,
} from './day-06'

test('2015-day-01 - Part One', async () => {
  const { example, answer } = await day_1_partone_2015('(()(()(')
  expect(example).toBe(3)
  expect(answer).toBe(280)
})

test('2015-day-01 - Part Two', async () => {
  const { example, answer } = await day_1_parttwo_2015('()())')
  expect(example).toBe(5)
  expect(answer).toBe(1797)
})

test('2015-day-02 - Part One', async () => {
  const data = ['2x3x4', '1x1x10']
  const answer = await day_2_partone_2015(data)
  expect(answer).toBe(58 + 43)
})

test('2015-day-02 - Part Two', async () => {
  const data = ['2x3x4', '1x1x10']
  const answer = await day_2_parttwo_2015(data)
  expect(answer).toBe(34 + 14)
})

test('2015-day-03 - Part One', async () => {
  const data = '^>v<v>^<'.split('')
  const answer = await day_3_partone_2015(data as Direction[])
  expect(answer).toBe(6)
})

test('2015-day-03 - Part Two', async () => {
  const data = '^v^v^v^v^v'.split('')
  const answer = await day_3_parttwo_2015(data as Direction[])
  expect(answer).toBe(11)
})

test('2015-day-04 - Part One', async () => {
  const answer_1 = day_4_2015('abcdef', '00000')
  const answer_2 = day_4_2015('pqrstuv', '00000')

  expect(answer_1).toBe(609043)
  expect(answer_2).toBe(1048970)
})

test('2015-day-04 - Part Two', async () => {
  const answer = day_4_2015('ckczppom', '000000')
  expect(answer).toBe(3938038)
})

test('2015-day-05 - Part One', async () => {
  const example = [
    'ugknbfddgicrmopn',
    'aaa',
    'jchzalrnumimnmhp',
    'haegwjzuvuyypxyu',
    'dvszwmarrgswjxmb',
  ]
  const answer = day5_PartOne_2015(example)
  expect(answer).toBe(2)
})

test('2015-day-05 - Part Two', async () => {
  const example = [
    'qjhvhtzxzqqjkmpb',
    'xxyxx',
    'uurcxstgmygtbstg',
    'ieodomkazucvgmuy',
  ]
  const answer = day5_PartTwo_2015(example)
  expect(answer).toBe(2)
})

test('2015-day-06 - Part One', async () => {
  const example = `
turn on 2,1 through 2,4
toggle 0,2 through 1,4
turn off 1,0 through 2,3`
    .split('\n')
    .filter((v) => v)

  const answer = day6_PartOne_2015(example, 3, 6)
  expect(answer).toBe(5)
})

test('2015-day-06 - Part Two', async () => {
  const example = `
turn on 2,1 through 2,4
toggle 0,2 through 1,4
turn off 1,0 through 2,3`
    .split('\n')
    .filter((v) => v)

  const answer = day6_PartTwo_2015(example, 3, 6)
  expect(answer).toBe(11)
})
