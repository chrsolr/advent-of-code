import _2015_01 from './2015/day-01'
import _2015_02 from './2015/day-02'
import _2015_03 from './2015/day-03'
import _2015_04 from './2015/day-04'
import _2015_05 from './2015/day-05'
import _2015_06 from './2015/day-06'

import _2022_01 from './2022/day-01'
import _2022_02 from './2022/day-02'
import _2022_03 from './2022/day-03'
import _2022_04 from './2022/day-04'
import _2022_05 from './2022/day-05'

import _2023_01 from './2023/day-01'
import _2023_02 from './2023/day-02'

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
    .set('2022-04', _2022_04)
    .set('2022-05', _2022_05)
    .set('2023-01', _2023_01)
    .set('2023-02', _2023_02)

  if (!challenge) {
    // TODO: run all
    return
  }

  if (map.has(challenge)) {
    map.get(challenge)!()
  }

  console.info('***************************************************')
})()
