const classDecorator = (target: Function) => {
    return class extends target {
        isInited = Date.now()
    }
}

const IdDecorator = (id: number) =>{
    return function(target: Function) {
        return class extends target {
            id = id
        }
    }
}

@classDecorator
@IdDecorator(44)
class myFirstClass {
    name: string
    constructor (name: 'string') {
        this.name = name
    }
}

let my_class = new myFirstClass('anis')

console.log(my_class)