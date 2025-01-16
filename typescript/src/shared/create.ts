import { promises as fs } from 'fs'
import path from 'path'

type ErrorType = { code: string | unknown }

const [, , lang, date] = process.argv

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

const isValidFormat = (inputString: string) => {
  const regex = /^\d{4}-\d{2}$/
  return regex.test(inputString)
}

async function checkIfFileExists(filePath: string, fileName: string) {
  console.info(`Checking if file exists::(${filePath}/${fileName})::`)
  try {
    await fs.access(`${filePath}/${fileName}`, fs.constants.F_OK)
    console.info(`File already exists::(${filePath}/${fileName})::`)
    return true
  } catch (err) {
    console.info(`File does not exist::(${filePath}/${fileName})::`)
    return false
  }
}

async function createDirectoryIfNotExists(directoryPath: string) {
  try {
    console.info(`Creating directory::(${directoryPath})::`)
    await fs.mkdir(directoryPath, { recursive: true })
  } catch (err) {
    console.info(`Error creating directory::(${directoryPath})::`)
    const { code } = err as ErrorType
    if (code !== 'EEXIST') {
      throw err
    }
  }
}

async function createFileWithDirectory(
  filePath: string,
  fileName: string,
  fileContent: string,
) {
  try {
    await createDirectoryIfNotExists(filePath)

    console.info(`Creating file::(${filePath}/${fileName})::`)

    const fileExists = await checkIfFileExists(filePath, fileName)
    if (fileExists) {
      return
    }

    await fs.writeFile(`${filePath}/${fileName}`, fileContent)
    console.info(`File created::(${filePath}/${fileName})::`)
  } catch (err) {
    console.error('Error creating file::', err)
  }
}

async function createTypescriptInputFile(year: string, day: string) {
  const filePath = path.resolve(__dirname, `../${year}/files`)
  const fileName = `input-day-${day}.ts`
  const fileContent = `export const test = \`\`

export const input = \`\`\n`

  await createFileWithDirectory(filePath, fileName, fileContent)

  console.info(`Input File Location::(${filePath}/${fileName})::\n`)
}

async function createTypescriptInputCode(year: string, day: string) {
  const filePath = path.resolve(__dirname, `../${year}`)
  const fileName = `day-${day}.ts`
  const fileContent = `import { input, test } from './files/input-day-${day}'
import { printResult } from '../shared/utils'

const getInputData = (): string[] => test.split('\\n')

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
`
  await createFileWithDirectory(filePath, fileName, fileContent)

  console.info(`Source Code File Location::(${filePath}/${fileName})::\n`)
}

async function createCSharpInputFile(year: string, day: string) {
  const filePath = path.resolve(__dirname, `../../../files/${year}`)
  const fileName = `${year}-${day}`
  const fileContent = 'REPLACE WITH CONTENT'

  await createFileWithDirectory(filePath, fileName, fileContent)

  console.info(`Input File Location::(${filePath}/${fileName})::\n`)
}

async function createCSharpInputCode(year: string, day: string) {
  const filePath = path.resolve(__dirname, `../../../csharp/${year}`)
  const fileName = `day-${day}.cs`
  const fileContent = ` public class _${year}_${day}
{

    private int SolvePartOne(List<string> lines)
    {
        return 0;
    }

    private int SolvePartTwo(List<string> lines)
    {
        return 0;
    }

    public void run()
    {
        const string inputFileDate = "${year}-${day}";

        var lines = FileUtils.GetInputData(inputFileDate);

        if (lines.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        var answerPartOne = SolvePartOne(lines);
        var answerPartTwo = SolvePartTwo(lines);

        Utils.PrintResult(answerPartOne, ${year}, ${Number(day)}, 1);
        Utils.PrintResult(answerPartTwo, ${year}, ${Number(day)}, 2);
    }
}`
  await createFileWithDirectory(filePath, fileName, fileContent)

  console.info(`Source Code File Location::(${filePath}/${fileName})::\n`)
}

;(async () => {
  console.log('LANG:', lang)

  if (!isValidFormat(date)) {
    console.error(
      'Invalid date format::(YYYY-MM)::\nPlease enter a valid date in the format::(YYYY-MM)::',
    )
    return
  }

  if (!isValidFormat(date)) {
    console.error(
      'Invalid date format::(YYYY-MM)::\nPlease enter a valid date in the format::(YYYY-MM)::',
    )
    return
  }

  if (lang === 'ts' || lang === 'js') {
    const [year, day] = date.split('-')
    console.info(`Starting creating files for::(${year}-${day})::\n`)

    await createTypescriptInputFile(year, day)
    await createTypescriptInputCode(year, day)

    console.info(`Finished creating files for::(${year}-${day})::`)
  }

  if (lang === 'cs' || lang === 'csharp') {
    const [year, day] = date.split('-')
    console.info(`Starting creating files for::(${year}-${day})::\n`)

    await createCSharpInputFile(year, day)
    await createCSharpInputCode(year, day)
  }
})()
