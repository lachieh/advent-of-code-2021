import { readFileSync } from "fs"
import { join } from "path"

if (!process.argv[2]) throw new Error("Must provide name for file and store input in folder")

const filePath = join(__dirname, "../" + process.argv[2] + "/index.ts")
const inputPath = join(__dirname, "../" + process.argv[2] + "/input.txt")

const input = readFileSync(inputPath, "utf8")
import(filePath).then((mod) => {
  const { default: fn } = mod
  console.log(fn(input))
})
