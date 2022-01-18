import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path';

const newFolder = process.argv[2]
if (!newFolder) throw new Error('include path name')

const folderExists = existsSync(join(__dirname, newFolder))
if (folderExists) throw new Error('folder already exists')

const newFile = join(__dirname, '../', newFolder, 'index.ts')
const newInput = join(__dirname, '../', newFolder, 'input.txt')

mkdirSync(join(__dirname, newFolder))
writeFileSync(newFile, `// Advent of Code: ${newFolder}
const ${newFolder} = (input: string) => {
  // solve
}

export default ${newFolder}
`)
writeFileSync(newInput, '')

