const usersList: [{fnmae:  string , age: number}] = [
    {
        fnmae: 'anis',
        age: 12
    }
]




type bankAccountType = {
    money: number,
    deposit: (amount:number) => void, 
    widraw: (amount:number) => void
}

var bankAccount:bankAccountType = {
    money: 2000,
    deposit: function(amount: number): void{
        this.money +=  amount
    },
    widraw: function(amount: number) : void{
        this.money -= amount
    } 
}

var mySelf: {name: string , bankAccount: bankAccountType , hobbies: Array<string>} = {
    name: "Anis",
    bankAccount : bankAccount,
    hobbies: ["Cricket" , "Coding"]
}

mySelf.bankAccount.deposit(3000)
mySelf.bankAccount.deposit(1300)
mySelf.bankAccount.deposit(2100)

console.log(mySelf.bankAccount.money)

mySelf.bankAccount.widraw(1900)

console.log(mySelf.bankAccount.money)
