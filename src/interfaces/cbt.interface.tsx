export interface CbtOptions {
    options:string[]
}

export interface Cbt {
    id?: string;
    autoThought:string;
    distortionChoice:CbtOptions[];
    challengeThought:string;
    altThought:string;
}