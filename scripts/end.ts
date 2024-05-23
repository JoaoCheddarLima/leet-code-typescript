import { writeFileSync, readFileSync } from 'fs'
import { difficulty, problemName } from '../answer'

writeFileSync(`./${difficulty}/${problemName}/answer.ts`, readFileSync("./answer.ts", "utf-8"))