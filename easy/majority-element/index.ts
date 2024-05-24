export const tags = ["hash-table", "array", "divide-and-conquer", "string", "counting"]
export const solutionId = "1266917782"
export const problemName = "majority-element"
export const difficulty = "easy"

//Here's the code I wrote for it while developing before the final answer...
function someFnTest(nums: number[]): number {
    const elements = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (elements.has(nums[i])) {
            elements.set(nums[i], elements.get(nums[i])! + 1);
        } else {
            elements.set(nums[i], 1);
        }

        if (elements.get(nums[i])! > nums.length / 2) {
            return nums[i];
        }
    }
    return -1
};

const nums = [
    [3, 2, 3],
    [2, 2, 1, 1, 1, 2, 2]
]

for (const num of nums) {
    console.log(someFnTest(num))
}