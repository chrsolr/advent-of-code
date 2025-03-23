import fs from 'fs'
import path from 'path'

const getInputData = (date: string): string[] => {
  if (!date) {
    throw new Error('date parameter cannot be null or empty')
  }

  const splited = date.split('-')
  if (!splited.length) {
    throw new Error('Invalid date format')
  }

  return readFileLineByLine(path.join('files', splited[0], date))
}

const readFileLineByLine = (filepath: string): string[] => {
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

export { getInputData, readFileLineByLine }
