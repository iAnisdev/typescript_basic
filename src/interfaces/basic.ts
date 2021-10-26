
interface User {
    fname: string,
    age?: number,
    [propName: string]: any,
    greet(fname:string) :void
}
function greet (user: User){
    console.log('Hello ' , user.fname)
}

let user: User = {
    fname: 'Anis',
    hobby: ['hello'],
    greet(fname){
        console.log(fname)
    }
}

greet(user)


class newUser implements User {
    fname: string
    age: number
    status: string
    lname: string
    constructor(fname: string , age: number){
        this.fname = fname
        this.age = age
        this.status = 'new'
    }
    greet(){
       console.log(this.fname) 
    }
}


interface admin extends User {
    isAvailable: boolean
}

class sysAdmin implements admin {
    fname: string
    age: number
    status: string
    lname: string
    isAvailable: boolean
    constructor(fname: string , age: number, isAvailable: boolean){
        this.fname = fname
        this.age = age
        this.status = 'new'
        this.isAvailable = isAvailable
    }
    greet(){
       console.log(this.fname) 
    }
}


interface color {
    code: string
}


var myColor: color = {
    code: '#fff'
}

interface opicity {
    unit: number
}
var basicOpicity : opicity = {
    unit: 1
}

type bacisColor = color & opicity

interface rgba extends color , opicity {
    colorCode: string
}

var greenRgba : rgba  = {
    colorCode: '#ffffff',
    unit: 0,
    code: '#fff'
}