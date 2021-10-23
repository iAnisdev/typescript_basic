class simpleMath <T  extends U , U extends number | string> {
    width: T
    height: T
    calculate(): number {
        return +this.width * +this.height
    }
}

let myMath = new simpleMath<number , number>()

myMath.height = 4
myMath.width = 3

console.log(myMath.calculate())