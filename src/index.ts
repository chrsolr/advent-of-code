import { dayOne2022 } from './2022/day-01'
import { dayTwo2022 } from './2022/day-02'

const [, , challenge] = process.argv

;(async () => {
  try {
    if (!challenge || challenge === '2022-01') {
      await dayOne2022()
    }

    if (!challenge || challenge === '2022-02') {
      await dayTwo2022()
    }
  } catch (error) {
    console.error('ERROR:', error)
  }
})()
