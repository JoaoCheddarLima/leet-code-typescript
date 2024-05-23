export const tags = ["array", "hash-table", "math", "counting"]
export const solutionId = "1266168814"
export const problemName = "number-of-good-pairs"
export const difficulty = "easy"

/*
Final explanation of changes.

Same as the previous solution, but this time we are using a set to prevent repetition of the same pair of indexes.

We use a reduce to make a cumullator representing the pairs then use the size for the count
Inside the reduce we iterate over the whole number array to see if something fits and adds into the set if so.
then we return the set to keep cumulating the pairs until done.
*/
function numIdenticalPairs(n: number[]): number {
    return n.reduce((setC, c, i) => {
        n.forEach((k, j) => {
            if(c === k && i < j) setC.add(`${i}-${j}`)
        })
        return setC
    }, new Set()).size
};

//Here's the code I wrote for it while developing before the final answer...
function numIdenticalPairsTest(n: number[]): number {
    //save the counting
    let gone = new Set()

    //the reason we are using indexes are for preventing repetition on the set.

    //iterate over each item by it's index
    for (const i in n) {
        //iterate over each item for comparison with the current base item by it's index too
        for(const j in n) {
            //if the current item is equal to the base item, increment the count
            if(n[i] === n[j] && i < j ) gone.add(`${i}-${j}`)
        }
    }

    return gone.size
};

const nums = [
    [1, 2, 3, 1, 1, 3],
    [1, 1, 1, 1],
    [1, 2, 3]
]

for (const num of nums) {
    console.log(numIdenticalPairs(num))
}