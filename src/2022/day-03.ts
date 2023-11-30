import input from './files/input-day-03'
import { printResult } from '../shared/utils'

type Alphabet = [string, number]

const getInputData = (): string[] => input.trim().split('\n')

const lowerAlphabet = Array.from({ length: 26 }, (_, i) => [
  String.fromCharCode(97 + i),
  i + 1,
])

const upperAlphabet = Array.from({ length: 26 }, (_, i) => [
  String.fromCharCode(65 + i),
  i + 27,
])
const alphabet = [...lowerAlphabet, ...upperAlphabet] as Alphabet[]

const solvePartOne = (lines: string[]): number => {
  let total = 0

  for (const line of lines) {
    const index = line.length / 2
    const [first, second] = [line.substring(0, index), line.substring(index)]
    let toNextLine = false

    for (let i = 0; i < first.length; i++) {
      if (toNextLine) {
        break
      }

      for (let j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
          const [, score] = alphabet.find((v) => v[0] === first[i]) || ['', 0]
          total += score
          toNextLine = true
          break
        }
      }
    }
  }

  return total
}

const solvePartTwo = (lines: string[]): number => {
  const groupByLengthOf = 3
  let groupHolder = []
  let total = 0

  for (const line of lines) {
    groupHolder.push(line)

    if (groupHolder.length === groupByLengthOf) {
      const [first, second, thrid] = groupHolder

      const matches = first.split('').map((letter) => ({
        letter,
        matched: second.includes(letter) && thrid.includes(letter),
      }))

      const [badge] = Array.from(
        new Set(matches.filter((v) => v.matched).map((v) => v.letter)),
      )
      const [, score] = alphabet.find((v) => v[0] === badge) || ['', 0]
      total += score
      groupHolder = []
    }
  }

  return total
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, 2022, 3, 1)
  printResult(answerPartTwo, 2022, 3, 2)
}
