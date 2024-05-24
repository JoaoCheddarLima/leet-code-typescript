export const tags = ["array", "hash-table"]
export const solutionId = "1266561995"
export const problemName = "two-sum"
export const difficulty = "easy"

/*
Final explanation of changes. (WRITE THE FINAL SUBMIT REFACTORED FUNCTION EXPLANATION)

Since they asked for big 0 notation we make a map to store the indexes of the numbers we have already seen.

While doing the process of storing this data we check if the complement of the current number is already in the map.

If it is we return the indexes of the current number and the complement.

It uses a little bit of memory but it's faster. 10x than the first solution since we don't have to loop through the array twice.

big O notation is O(n) since we only loop through the array once.

I've learning this concept while doing this question, pretty good!
*/
function someFn(nums: number[], target: number): number[] | undefined {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement)!, i]
        }
        map.set(nums[i], i)
    }
};

//Here's the code I wrote for it while developing before the final answer...
function someFnTest(nums: number[], target: number): number[] {
    //basic code
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j || nums[j] + nums[i] !== target) continue

            return [j, i]
        }
    }
    return []
};

const nums = [
    {
        nums: [2, 7, 11, 15],
        target: 9
    },
    {
        nums: [3, 2, 4],
        target: 6
    },
    {
        nums: [3, 3],
        target: 6
    },
    {
        nums: [0, 4, 3, 0],
        target: 0
    }
]

// for (const data of nums) {
//     console.log(someFnTest(data.nums, data.target))
// }