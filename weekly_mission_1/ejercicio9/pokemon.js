class pokemon{
    constructor(name){
        this.name= name
    }
    sayHello (message){
        console.log(`[Mi Pokemon ${this.name} te saluda]`)
    }
    sayMessage (message){
        console.log(`[Mi Pokemon ${this.name} te dice ${message}]`)
    }
}
module.exports = pokemon
