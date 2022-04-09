export default class MyPokemon{
    constructor(name) {
        this.name= name
    }
    sayHello (message){
        console.log(`Mi pokemon ${this.name} dice ${message}`)
    }
}