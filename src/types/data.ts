export type Difficulty = "easy" | "normal" | "hard";

export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulty
    sequence: Array<SequenceItem>, //SequenceItem[]
}

export type SequenceType = "exercise" | "stretch" | "break"

export interface SequenceItem {
    slug: string,
    name: string,
    type: SequenceType,
    duration: number,
    reps?: number, //olabilir de olmayabilir de demek
}
