import { readFileSync, writeFileSync, readdirSync } from 'fs'
import AutomatonBuilder from '../Class/Automaton'
import { difficulties, difficultyKeys } from '../types/fileInfo'

const botCutWord = "<!-- Automated code down below! check automaton.ts -->"
const README = readFileSync("./README.md", "utf-8")

const automaton = new AutomatonBuilder(README, botCutWord);

const DEV_MODE = true

function log(text: string): void {
    if (DEV_MODE) console.log(text);
}

(async () => {
    for (const difficulty of Object.values(difficulties)) {
        log(`Reading ${difficulty} file...`)
        try {
            const openProblems = readdirSync(`./${difficulty}`, "utf-8")
            log(`Found ${openProblems.length} problems in ${difficulty}...`)

            for (const problem of openProblems) {
                const openSolutions = readdirSync(`./${difficulty}/${problem}`, "utf-8")

                log(`Found ${openSolutions.length} solutions for ${problem}...`)
                for (const solution of openSolutions) {
                    log(`Reading ${solution}...`)
                    const solutionModule = await import(`./${difficulty}/${problem}/${solution}`)

                    log(`Adding ${solution} to automaton...`)
                    automaton.addItem({
                        Difficulty: difficulty,
                        Name: problem,
                        SolutionId: solutionModule.solutionId,
                        Tags: solutionModule.tags,
                        fileName: solution
                    })
                }
            }
        } catch (err) {
            log(`Error reading ${difficulty} file: ${err}`)
        }
    }

    writeFileSync("./README.md", automaton.build())
}
)();

//TODO Create a dashboard for the automaton