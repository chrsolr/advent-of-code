import fs from 'fs'
import readline from 'readline'

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
