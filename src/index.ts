import { dayOne2022 } from './2022/day-01'

const [, , challenge] = process.argv

;(async () => {
  try {
    if (!challenge || challenge === '2022-01') {
      await dayOne2022()
    }
  } catch (error) {
    console.error('ERROR:', error)
  }
})()
