export const tags = ["hash-table", "string"]
export const solutionId = "1265621100"

/*
Final explanation of changes.

Is the same as the initial but, since I was using a for with a split I decided tu remove both with reduce
Why reduce? 
1 - Reduce already sets the cumulator value inside the function as I can pass 0.
2 - Reduce already returns the cumulator so I don't need to return it.
3 - Reduce already iterates over the array so I don't need to do it.
4 - Reduce is a more functional way of doing it.
5 - Reduce is a more elegant way of doing it.

But it's not the most readable way of doing it, was using just because I know it.
*/
function findPermutationDifference(s: string, t: string): number {
    return s.split("").reduce((cumulator, char) => cumulator + Math.abs(s.indexOf(char) - t.indexOf(char)), 0)
};

//Here's the code I wrote for it while developing before the final answer...
function findPermutationDifferenceTest(s: string, t: string): number {
    let absoluteDifference: number = 0

    // console.log(`Recived strings: ${s} and ${t}`)

    for (const ch of s.split("")) {
        // console.log(`Char: ${ch}, index in s: ${s.indexOf(ch)}, index in t: ${t.indexOf(ch)}`)

        absoluteDifference += Math.abs(s.indexOf(ch) - t.indexOf(ch))

        // console.log(`Current absolute difference: ${absoluteDifference}`)
    }

    // console.log(`Final absolute difference: ${absoluteDifference}`)
    return absoluteDifference
};

const perms = [
    ["abc", "bac"],
    ["abc", "bca"],
    ["abc", "cab"],
    ["abc", "cba"],
    ["abc", "acb"],
    ["abc", "abc"],

    ["abcd", "bacd"],
    ["abcd", "bcad"],
    ["abcd", "bcda"],
    ["abcd", "bdca"],
    ["abcd", "bdac"],
    ["abcd", "badc"],
    ["abcd", "abdc"],
    ["abcd", "acbd"],
    ["abcd", "acdb"],
    ["abcd", "adcb"],
    ["abcd", "adbc"],
    ["abcd", "abcd"],
]

const perm = perms[0]

findPermutationDifferenceTest(perm[0], perm[1])

// for (const perm of perms) {
//     console.log(perm, findPermutationDifference(perm[0], perm[1]))
// }