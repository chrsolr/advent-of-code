import input from './files/input-day-03'
import { printResult } from '../shared/utils'

type MapItem = {
  digit: string
  coordinates: string[]
  beenAdded: boolean
}

const getInputData = (): string[] => input.split('\n').filter((line) => line)
const isNumber = (character: string) => !isNaN(+character)

const createMap = (lines: string[]): MapItem[] => {
  let y = 0

  return lines.flatMap((line) => {
    const items: MapItem[] = []

    let x = 0
    let digit = ''
    let coords: string[] = []

    for (const char of line) {
      if (isNumber(char)) {
        digit += char
        coords.push(`${x},${y}`)

        if (!isNumber(line[x + 1])) {
          items.push({
            digit,
            coordinates: coords,
            beenAdded: false,
          })

          digit = ''
          coords = []
        }
      }

      x++
    }

    y++

    return items
  })
}

const getSurroundingCoordinates = (x: number, y: number): string[] => {
  const directions = [-1, 0, 1]
  const neighboards = []

  for (const dx of directions) {
    for (const dy of directions) {
      if (dx !== 0 || dy !== 0) {
        neighboards.push(`${x + dx},${y + dy}`)
      }
    }
  }

  return neighboards
}

const solvePartOne = (lines: string[]) => {
  const mapItems = createMap(lines)

  let y = 0
  let x = 0

  let total = 0

  for (const line of lines) {
    for (const char of line) {
      if (isNumber(char) || char === '.') {
        x++
        continue
      }

      const potentialCoords = getSurroundingCoordinates(x, y)

      for (const c of potentialCoords) {
        const ff = mapItems.findIndex((v) => v.coordinates.includes(c))
        const a = mapItems[ff]

        if (a !== undefined && !a.beenAdded) {
          total += Number(a.digit)
          mapItems[ff].beenAdded = true
        }
      }

      x++
    }

    y++
    x = 0
  }

  return total
}

const solvePartTwo = (lines: string[]) => {
  return 0
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2023, 3, 1)
  printResult(answerPartTwo, 2023, 3, 2)
}
