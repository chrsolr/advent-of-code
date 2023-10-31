import { run as dayOne2022 } from './day-01'
import {
  runPartOne as day_2_partone_2022,
  runPartTwo as day_2_parttwo_2022,
} from './day-02'
import {
  runPartOne as day_3_partone_2022,
  runPartTwo as day_3_parttwo_2022,
} from './day-03'
import {
  runPartOne as day_4_partone_2022,
  runPartTwo as day_4_parttwo_2022,
} from './day-04'

test('2022-day-01 - Combined', async () => {
  const [one, two] = await dayOne2022()
  expect(one).toBe(69206)
  expect(two).toBe(197400)
})

test('2022-day-02 - Part One', async () => {
  const [example, answer] = await day_2_partone_2022()
  expect(example).toBe(15)
  expect(answer).toBe(10718)
})

test('2022-day-02 - Part Two', async () => {
  const [example, answer] = await day_2_parttwo_2022()
  expect(example).toBe(12)
  expect(answer).toBe(14652)
})

test('2022-day-03 - Part One', async () => {
  const [example, answer] = await day_3_partone_2022()
  expect(example).toBe(157)
  expect(answer).toBe(7917)
})

test('2022-day-03 - Part Two', async () => {
  const [example, answer] = await day_3_parttwo_2022()
  expect(example).toBe(70)
  expect(answer).toBe(2585)
})

test('2022-day-04 - Part One', async () => {
  const [example, answer] = await day_4_partone_2022()
  expect(example).toBe(2)
  expect(answer).toBe(573)
})

test('2022-day-04 - Part Two', async () => {
  const [example, answer] = await day_4_parttwo_2022()
  expect(example).toBe(4)
  expect(answer).toBe(867)
})
