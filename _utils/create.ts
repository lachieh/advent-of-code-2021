import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path';

const name = process.argv[2]
const newFolder = '../' + name
if (!newFolder) throw new Error('include path name')

const folderExists = existsSync(join(__dirname, newFolder))
if (folderExists) throw new Error('folder already exists')

const newFile = join(__dirname, newFolder, 'index.ts')
const newInput = join(__dirname, newFolder, 'input.txt')

mkdirSync(join(__dirname, newFolder))
writeFileSync(newFile, `// Advent of Code: ${name}
const ${name} = (input: string) => {
  const processed = processInput(input)
  
}

const processInput = (input: string): ProcessedInput => {

}

type ProcessedInput = void

export default ${name}
`)
writeFileSync(newInput, '')

