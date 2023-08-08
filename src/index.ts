import { partOne } from './day-01'

const [, , challenge] = process.argv

;(async () => {
  try {
    if (!challenge || challenge === '2022-01') {
      await partOne()
    }
  } catch (error) {
    console.error('ERROR:', error)
  }
})()
