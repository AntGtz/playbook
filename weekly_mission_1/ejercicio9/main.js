const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Pikaaaa!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Saur!")

charmander.sayHello()
charmander.sayMessage("Char char!")

squirtle.sayHello()
squirtle.sayMessage("Squirt!")