import input from './files/input-day-05'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.trim().split('\n')

function getStackAndOperations(arr: string[]) {
  const { stack, moves } = arr.reduce(
    (memo, current) => {
      if (current.includes('move')) {
        memo.moves.push(current)
        return memo
      }

      if (current.includes('1')) {
        return memo
      }

      const lineChars = current.split('')

      for (let i = 0; i < lineChars.length; i++) {
        const value = lineChars[i]

        if (value && value !== ' ') {
          const cargo = `${lineChars[i]}${lineChars[i + 1]}${lineChars[i + 2]}`
          const stackIndex = Math.floor((i + 3) / 3 - 1)

          if (!memo.stack[stackIndex]) {
            memo.stack[stackIndex] = []
          }

          memo.stack[stackIndex].unshift(cargo)

          i += 2
        }
      }

      return memo
    },
    { stack: [], moves: [] } as {
      stack: string[][]
      moves: string[]
    },
  )

  const operations = moves.reduce((memo, current) => {
    const [amount, from, to] = current
      .split(' ')
      .filter((v) => !isNaN(Number(v)))
      .map((v) => +v)

    memo.push({ amount, from, to })
    return memo
  }, [] as { amount: number; from: number; to: number }[])

  return { stack, operations }
}

function solve(
  stack: string[][],
  operations: { amount: number; from: number; to: number }[],
  reverse = true,
) {
  const currentStack: string[][] = JSON.parse(JSON.stringify(stack))

  for (let i = 0; i < operations.length; i++) {
    const { amount, from, to } = operations[i]

    const itemsToMove = currentStack[from - 1].splice(
      currentStack[from - 1].length - amount,
    )

    reverse
      ? currentStack[to - 1].push(...itemsToMove.reverse())
      : currentStack[to - 1].push(...itemsToMove)
  }

  return currentStack
    .filter((v) => v && v.length)
    .map((v) => `${v.pop()}`)
    .join('')
    .replace(/\[/g, '')
    .replace(/]/g, '')
}

export default () => {
  const lines = getInputData()

  const { stack, operations } = getStackAndOperations(lines)

  const filteredStack = stack.filter((v) => v)

  const answerPartOne = solve(filteredStack, operations, true)
  const answerPartTwo = solve(filteredStack, operations, false)

  printResult(answerPartOne, 2022, 5, 1)
  printResult(answerPartTwo, 2022, 5, 2)
}
