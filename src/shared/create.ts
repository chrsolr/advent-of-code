import { promises as fs } from 'fs'
import path from 'path'

const [, , date] = process.argv

/**
 * TODO:
 * - Check if the folder exists
 *    - If not:: create it
 *    - If yes:: check if the files exist
 *        - If not:: create them
 *        - If yes:: ask if they should be overwritten
 *            - If yes:: overwrite them
 *            - If no:: exit
 */

;(async () => {
  const [year, day] = date.split('-')
  console.info(`Creating files for ${year}-${day}...`)

  // Create input file
  const inputDestinationLocation = `../${year}/files/input-day-${day}.ts`
  const codeDestinationLocation = `../${year}/day-${day}.ts`

  console.info(`input...`)
  await fs.writeFile(
    path.resolve(__dirname, inputDestinationLocation),
    `export default \`\`\n`,
  )

  console.info(`code...`)
  await fs.writeFile(
    path.resolve(__dirname, codeDestinationLocation),
    `import input from './files/input-day-${day}'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => input.split('\\n')

const solvePartOne = (lines: string[]) => {
  return lines.length
}

const solvePartTwo = (lines: string[]) => {
  return lines.length
}

export default () => {
  const lines = getInputData()

  const answerPartOne = solvePartOne(lines)
  const answerPartTwo = solvePartTwo(lines)

  printResult(answerPartOne, ${year}, ${Number(day)}, 1)
  printResult(answerPartTwo, ${year}, ${Number(day)}, 2)
}
`,
  )

  console.info(`done!!`)
})()
