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
