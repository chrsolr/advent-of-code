import fs from 'fs'
import readline from 'readline'
import path from 'path'

/**
 * @deprecated (Remove after 2022 is fully migrated to esm modules)
 */
export async function readFileLineByLine(filepath: string) {
  const fileStream = fs.createReadStream(filepath)
  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const lines = []
  for await (const line of lineReader) {
    lines.push(line)
  }

  return lines
}

export async function getInputData(filePath: string): Promise<string[]> {
  const filepath = path.join(__dirname, '../', filePath)
  return readFileLineByLine(filepath)
}

export function printResult(
  answer: number | string,
  year: number,
  day: number,
  part: number,
): void {
  console.info('***************************************************')
  console.info(`Advent of Code: Day ${day} of ${year} (Part #${part})`)
  console.info(`Instruction @: https://adventofcode.com/${year}/day/${day}`)
  console.info('Total Answer Score:', answer)
}
