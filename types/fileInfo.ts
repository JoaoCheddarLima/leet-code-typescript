export enum difficulties {
    "easy" = "easy",
    "medium" = "medium",
    "hard" = "hard"
}

export type difficultyKeys = keyof typeof difficulties

export type fileInfo = {
    "Name": string,
    "Tags": string[],
    "Difficulty": difficultyKeys,
    "SolutionId": string,
    "fileName": string,
}

export type MarkdownListItemInfo = {
    "Name": string,
    "Tags": string[],
    "SolutionLink": string,
    "ProblemLink": string,
    "Language": string,
    "SolutionExplainedLink": string
}

export type organizedInfo = {
    [key in difficultyKeys]: {
        [problemName: string]: MarkdownListItemInfo[]
    }
}