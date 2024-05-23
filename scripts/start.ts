import { readFileSync, writeFileSync, readdirSync } from 'fs'

const template = readFileSync("./scripts/template.ts", "utf-8")

writeFileSync("./answer.ts", template)