export default class LeetCode {
    public makeProblemUrl(problemName: string): string {
        return `https://leetcode.com/problems/${problemName}`
    }
    public makeTagUrl(tag: string): string {
        return `https://leetcode.com/tag/${tag}`
    }
    public makeSolutionUrl(solutionId: string, problemName: string): string {
        return `https://leetcode.com/problems/${problemName}/submissions/${solutionId}`
    }
}