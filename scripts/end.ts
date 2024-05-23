import { writeFileSync, readFileSync, mkdirSync } from 'fs'
import { difficulty, problemName } from '../answer'

try {
    mkdirSync(`./${difficulty}/${problemName}`, { recursive: true })

    writeFileSync(`./${difficulty}/${problemName}/index.ts`, readFileSync("./answer.ts", "utf-8"))
} catch (err) {
    console.error("Error in end.ts: ", err)
}