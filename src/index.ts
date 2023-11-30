import _2015_01 from './2015/day-01'
import _2015_02 from './2015/day-02'
import _2015_03 from './2015/day-03'
import _2015_04 from './2015/day-04'
import _2015_05 from './2015/day-05'
import _2015_06 from './2015/day-06'

import _2022_01 from './2022/day-01'
import _2022_02 from './2022/day-02'
import _2022_03 from './2022/day-03'

import { day4_PartOne_2022, day4_PartTwo_2022 } from './2022/day-04'
import { day5_PartOne_2022, day5_PartTwo_2022 } from './2022/day-05'

const [, , challenge] = process.argv

;(async () => {
  const map = new Map<string, () => void>()
    .set('2015-01', _2015_01)
    .set('2015-02', _2015_02)
    .set('2015-03', _2015_03)
    .set('2015-04', _2015_04)
    .set('2015-05', _2015_05)
    .set('2015-06', _2015_06)
    .set('2022-01', _2022_01)
    .set('2022-02', _2022_02)
    .set('2022-03', _2022_03)

  if (!challenge) {
    // TODO: run all
    return
  }

  if (map.has(challenge)) {
    map.get(challenge)!()
  }

  if (!challenge || challenge === '2022-04') {
    await day4_PartOne_2022()
    await day4_PartTwo_2022()
  }

  if (!challenge || challenge === '2022-05') {
    await day5_PartOne_2022()
    await day5_PartTwo_2022()
  }

  console.info('***************************************************')
})()
