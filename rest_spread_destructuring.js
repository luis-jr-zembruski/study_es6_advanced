// function sum(a, b) {
//   let value = 0

//   for (let i = 0; i < arguments.length; i++) {
//     value += arguments[i]
//   }
//   return value
// }

// Podemo fazer usando rest operator

let sum = (...args) => {
  return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))
