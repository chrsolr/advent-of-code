import { day1_2022 } from './2022/day-01'
import { day2_PartOne_2022, day2_PartTwo_2022 } from './2022/day-02'
import { day3_PartOne_2022, day3_PartTwo_2022 } from './2022/day-03'
import { day4_PartOne_2022, day4_PartTwo_2022 } from './2022/day-04'

const [, , challenge] = process.argv

;(async () => {
  try {
    if (!challenge || challenge === '2022-01') {
      await day1_2022()
    }

    if (!challenge || challenge === '2022-02') {
      await day2_PartOne_2022()
      await day2_PartTwo_2022()
    }

    if (!challenge || challenge === '2022-03') {
      await day3_PartOne_2022()
      await day3_PartTwo_2022()
    }

    if (!challenge || challenge === '2022-04') {
      await day4_PartOne_2022()
      await day4_PartTwo_2022()
    }

    console.info('***************************************************')
  } catch (error) {
    console.error('ERROR:', error)
  }
})()
