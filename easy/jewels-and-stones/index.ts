export const tags = ["hash-table", "array"]
export const solutionId = ""
export const problemName = "jewels-and-stones"
export const difficulty = "easy"

/*
Final explanation of changes. 

We iterate over the stones after we split each one into a single ch and check if it's included in the jewels string inside a reduce to cumulate.
*/
function numJewelsInStones(jewels: string, stones: string): number {
    return stones.split("").reduce((c, s) => {
        return jewels.includes(s) ? c + 1 : c
    }, 0)
};

//Here's the code I wrote for it while developing before the final answer...
function numJewelsInStonesTest(jewels: string, stones: string): number {
    //we define a counter
    let count = 0

    for (const stone of stones.split("")) {
        //if the jewels includes the stone, increment the counter
        if (jewels.includes(stone)) count++
    }

    return count
};

const nums = [
    ["aA", "aAAbbbb"],
    ["z", "ZZ"]
]

for (const num of nums) {
    console.log(numJewelsInStonesTest(num[0], num[1]))
}