const heroes = ['Cyclops', 'Wolverine', 'Jean Grey', 'Dazzler']
const threeLetters = heroes.map((name) =>
    name.toUpperCase().slice(0, 3)
)
console.log(threeLetters)