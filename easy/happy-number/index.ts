export const tags = ["hash-table", "math", "two-pointers"]
export const solutionId = "1267063195"
export const problemName = "happy-number"
export const difficulty = "easy"

//Here's the code I wrote for it while developing before the final answer...
function someFnTest(n: number): boolean {
    const map = new Map<number, number>()

    while (true) {
        n = String(n).split("").reduce((acc, digit) => { return acc + (Number(digit) ** 2) }, 0)

        if (map.has(n)) return false;
        if (n === 1) return true;

        map.set(n, 1)
    }
};

const nums = [
    19,
    2,
    1,
    3
]

for (const num of nums) {
    console.log(someFnTest(num))
}