import { readFileSync, writeFileSync, readdirSync } from 'fs'

const template = readFileSync("./templates/template.ts", "utf-8")

writeFileSync("./answer.ts", template)