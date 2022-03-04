// var sum = function (a, b) {
//   return a + b
// }

// sum(3, 5)

// Pode ser feito assim
let sum = (a, b) => a + b

console.log(sum(3, 5))

/***************************/

// function multiply(a, b) {
//   b = typeof b === 'undefined' ? 5 : b
//   return a * b
// }

// console.log(multiply(5))

// Podemos fazer assim

let multiply = (a, b = 5) => a * b

console.log(multiply(5))

/***************************/

prop1 = 'Propriedade 1'
// var obj = {
//   prop1: prop1
// }

// Podemos fazer assim
var obj = {
  prop1
}

console.log(obj)
