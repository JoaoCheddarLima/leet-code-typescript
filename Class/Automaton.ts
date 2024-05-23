import { MarkdownListItemInfo, difficulties, difficultyKeys, fileInfo, organizedInfo } from "../types/fileInfo"
import { languageKeys, languages, languageValues } from "../types/langs"
import leetCode from "./LeetCode"

export default class AutomatonBuilder {
    README: string
    CUT_WORD: string
    organized: organizedInfo
    leetLinks: leetCode
    itemsList: fileInfo[]

    constructor(Readme: string, CutWord: string) {
        this.README = Readme
        this.CUT_WORD = CutWord
        this.organized = {
            "easy": {},
            "medium": {},
            "hard": {}
        }
        this.itemsList = []
        this.leetLinks = new leetCode()
    }

    private getLanguageName(filExtension: any): string {
        const lang = languageKeys[languageKeys.indexOf(filExtension)]

        if (!lang) throw new Error(`Language ${filExtension} not found in the language list`)

        return languageValues[languageKeys.indexOf(lang)]
    }

    private startAndEndMarkdownList(innerItems: string): string {
        return `<details>${innerItems}</details>\n`
    }

    private titleDropDown({
        title,
        layer = 0,
        upsertText = "",
        link = false
    }: { title: string, layer: number, upsertText: string, link: boolean }): string {
        const text = title.split("-").map((e) => {
            return e[0].toUpperCase() + e.slice(1)
        }).join(" ")

        let problemHeading = text

        if (link) {
            problemHeading = `[${problemHeading}](${this.leetLinks.makeProblemUrl(title)})`

            if(upsertText) problemHeading = upsertText + problemHeading

            problemHeading = `\n#### ${problemHeading}`
        } else if (upsertText) {
            problemHeading = upsertText + problemHeading
        }

        return `\n<summary>\n${problemHeading}</summary>`
    }

    private CutReadme(): string {
        return this.README.split(this.CUT_WORD)[0]
    }

    private makeListOrganizedList(): void {
        this.itemsList.forEach(({
            Difficulty,
            Name,
            SolutionId,
            Tags,
            fileName
        }) => {
            const dif: difficultyKeys = Difficulty

            const itemData = {
                "Name": Name,
                "Tags": Tags,
                "SolutionExplainedLink": `./${dif}/${Name}/${fileName}`,
                "SolutionLink": this.leetLinks.makeSolutionUrl(SolutionId, Name),
                "ProblemLink": this.leetLinks.makeProblemUrl(Name),
                "Language": this.getLanguageName(fileName.split(".")[1])
            }

            console.log(itemData)

            if(this.organized[dif][Name] === undefined) return this.organized[dif][Name] = [itemData];

            this.organized[dif][Name].push(itemData)
        })
    }

    private makeMarkdownFormattedListItemRef({
        Tags,
        SolutionLink,
        ProblemLink,
        Language,
        SolutionExplainedLink
    }: MarkdownListItemInfo, tabs: number): string {
        return `🎯 [${Language} Solution](${SolutionExplainedLink}) | [LeetCode Solution](${SolutionLink}) | [Problem](${ProblemLink}) | Tags: [${Tags.map(tag => `[${tag}](${this.leetLinks.makeTagUrl(tag)})`).join(" | ")}]<br>`
    }

    public addItem(item: fileInfo): void {
        this.itemsList.push(item)
    }

    public build() {
        let README = this.CutReadme() + this.CUT_WORD + "\n"
        let markdownListItems = ``

        this.makeListOrganizedList()

        let lists = []

        for (const Difficulty of Object.values(difficulties)) {

            if (!this.organized[Difficulty]) continue

            markdownListItems += `${this.titleDropDown({
                title: Difficulty.toUpperCase(),
                layer: 0,
                link: false,
                upsertText: "📚 "
            })}`

            for (const Problem in this.organized[Difficulty]) {
                const tabs = 1

                markdownListItems += `${this.titleDropDown({
                    layer: 0,
                    title: Problem,
                    upsertText: "🔎 Problem: ",
                    link: true
                })}\n`
                const items = this.organized[Difficulty][Problem]

                items.forEach((item: MarkdownListItemInfo) => {
                    markdownListItems += this.makeMarkdownFormattedListItemRef(item, tabs)
                })
            }

            if(Object.keys(this.organized[Difficulty]).length == 0){
                markdownListItems += `No problems solved for ${Difficulty} yet.`
            }

            // markdownListItems += "\n"
            lists.push(markdownListItems)
            markdownListItems = ""
        }
        for (const list of lists) {
            README += this.startAndEndMarkdownList(list)
        }

        return README
    }
}