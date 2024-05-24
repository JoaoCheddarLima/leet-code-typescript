export const tags = ['hash-table', 'math', 'string']
export const solutionId = "1266584854"
export const problemName = "roman-to-integer"
export const difficulty = "easy"

//Here's the code I wrote for it while developing before the final answer...
function someFnTest(s: string): number {
    const numerals = new Map<string, number>()

    numerals.set("I", 1)
    numerals.set("V", 5)
    numerals.set("X", 10)
    numerals.set("L", 50)
    numerals.set("C", 100)
    numerals.set("D", 500)
    numerals.set("M", 1000)
    numerals.set("acc", 0)

    for(let i = 0; i < s.length; i++) {
        if (i !== s.length - 1 && numerals.get(s[i])! < numerals.get(s[i + 1])!) {
            numerals.set("acc", numerals.get("acc")! - numerals.get(s[i])!)
            continue
        }

        numerals.set("acc", numerals.get("acc")! + numerals.get(s[i])!)
    }

    return numerals.get("acc")!
};

const nums = [
    "III",
    "IV",
    "IX",
    "LVIII",
    "MCMXCIV"
]

for (const num of nums) {
    console.log(someFnTest(num))
}