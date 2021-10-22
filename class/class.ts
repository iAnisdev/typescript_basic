abstract class Person {
    name: string;
    private type: string;
    protected age: number;
    constructor(name: string, public username: string) {
        this.name = name
    }
    setAge(age: number) {
        this.age = age
    }
     setType(type: string) {
        this.type = type
    }
    getAge() {
        return this.age
    }
    getType() {
        return this.type
    }
}

class Developer extends Person{
    experience: number
    private _language : String
    constructor(name: string, username: string,experience:number){
        super(name , username)
        this.experience = experience
    }
    set language(value: string){
        this._language =value
    }
    get languaue(){
        return this._language
    }
}

let me = new Developer('Anis', 'marahmanjs' , 3)
console.log(me)


class helpers {
    static PI: number = 3.14
    static  PISquare () {
        return this.PI * this.PI
    }
}

class Department {
    name : string 
    constructor (name: string){
        this.name = name
    }
}


class accounting extends Department {
    id: number = 1
    public readonly manager: string
    static instance: accounting;
    private constructor(name: string , manager: string){
        super(name)
        this.manager = manager
    }
    static getInstance(){
        if(!accounting.instance){
           return  new accounting('accounting' , 'anis')
        }
        return accounting.instance
    }
}

var actDep = accounting.getInstance()
console.log(actDep)

console.log(helpers.PI)
console.log(helpers.PISquare())



class car {
    name: string
    accelaration : number = 0
    constructor (name: string){
        this.name = name
    }
    makeSound(sound: string){
        console.log(sound)
    }
    accelarate(speed: number): void{
        this.accelaration = this.accelaration + speed
    }
    deAccelarate(speed: number): void{
        this.accelaration = this.accelaration - speed
    }
    brake(): void{
        this.accelaration = 0
    }
}


var my_car = new car('bmw')

console.log(my_car.accelaration)
my_car.makeSound('booooo')
my_car.accelarate(25)
console.log(my_car.accelaration)
my_car.makeSound('booooo')
my_car.accelarate(45)
console.log(my_car.accelaration)
my_car.accelarate(12)
console.log(my_car.accelaration)
my_car.makeSound('booooo')
my_car.accelarate(22)
console.log(my_car.accelaration)
my_car.accelarate(13)
console.log(my_car.accelaration)
my_car.deAccelarate(35)
console.log(my_car.accelaration)
my_car.deAccelarate(24)
console.log(my_car.accelaration)
my_car.brake()
console.log(my_car.accelaration)