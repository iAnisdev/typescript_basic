//generic function
function validateData<T>(data: T): T{
    return data
}

//generic function
const Ids: Array<number> = [1 , 2 , 4]

//generic function
function printAll<T>(args: T[]){
    args.forEach(a => console.log(a))
}

//generic types
const genericType: <T>(data: T) => T  = validateData

printAll<number>([1,2,4])