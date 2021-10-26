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

class icream {
    @emoji() type: string

    constructor(type: string) {
        this.type = type
    }
}



var vanila = new icream('vanila')

console.log(vanila)