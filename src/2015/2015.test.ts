import {
  runPartOne as day_1_partone_2015,
  runPartTwo as day_2_parttwo_2015,
} from './day-01'

test('2015-day-01 - Part One', async () => {
  const [example, answer] = await day_1_partone_2015()
  expect(example).toBe(3)
  expect(answer).toBe(280)
})

test('2015-day-01 - Part Two', async () => {
  const [example, answer] = await day_2_parttwo_2015()
  expect(example).toBe(5)
  expect(answer).toBe(1797)
})
