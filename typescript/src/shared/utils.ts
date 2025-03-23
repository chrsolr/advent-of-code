import fs from 'fs'
import path from 'path'

function readFileLineByLine(filepath: string): string[] {
  try {
    return fs
      .readFileSync(filepath, 'utf8')
      .split('\n')
      .map((line) => line.replace('\r', ''))
      .filter((v) => v)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Input file not found: ${filepath}`)
    }

    throw new Error(`Error reading file: ${filepath}`)
  }
}

export function getInputData(date: string): string[] {
  const splited = date.split('-')

  if (!splited.length) {
    throw new Error('Invalid date format')
  }

  return readFileLineByLine(
    path.join(__dirname, '../../..', 'files', splited[0], date),
  )
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
