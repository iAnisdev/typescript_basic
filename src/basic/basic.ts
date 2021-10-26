let myValue: number | null = 20


console.log('myValue ' , myValue)


function reset() : void {
    let myValue: number | null = 20
    myValue = null
    console.log('myValue inside function' , myValue)
}



console.log('myValue before function call' , myValue)


reset()

console.log('myValue after function call' , myValue)


