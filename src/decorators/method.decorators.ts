function emoji(){
    return function(target: Object , key: string){
        let val = target[key]
        const getters = () => {
            return val
        }

        const setters = (next: string) => {
            console.log('updating value ')
            val = `🍦 ${next} 🍦`
            console.log('value updated ' ,  val)
            return val
        }

        setters(key)


    }
}

function confirmable(msg: string) {
    return function(){
        alert(msg)
    }
}

function verifiable(msg: string) {
    return function(target: object , key: string, ){
        alert(msg)
    }
}

class icream {
    @emoji() type: string
    toppings: string[] = []
    constructor(type: string) {
        this.type = type
    }
    @confirmable('are you sure to Add')
    @verifiable('Topping Added')
    addTopins(topping: string){
        console.log(topping)
        this.toppings.push(topping)
    }
}



var vanila = new icream('vanila')
vanila.addTopins('crust')
vanila.addTopins('banana')
console.log(vanila)