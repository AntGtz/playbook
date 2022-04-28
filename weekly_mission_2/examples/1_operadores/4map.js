const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map(function(num) {return num*num})
console.log(numbersSquare)
numbersSquare.forEach(square => console.log(square))