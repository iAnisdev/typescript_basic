namespace mathBlock {
    const PI: number = 3.14
    export function calculateCircumference(diamter: number): number {
        return PI * diamter
    }
}

console.log("mathBlock.calculateCircumference " , mathBlock.calculateCircumference(4))