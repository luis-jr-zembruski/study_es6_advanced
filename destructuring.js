let arr = ['Apple', 'Banana', 'Orange']

// let apple = arr[0]
// let banana = arr[1]
// let orange = arr[2]

// Using Destructuring
let [apple, banana, orange] = ['Apple', 'Banana', 'Orange']

console.log('Destructuring array: ' + apple, banana, orange)

let obj = {
  name: 'Luis',
  props: {
    age: 32
  }
}

// let name = obj.name

// Using Destructuring
let { name } = obj

console.log('Destructuring object: ' + name)

// Multi level of destruct
let {
  props: { age }
} = obj

console.log('Destructuring object in multi level: ' + age)

// Using Destructuring in function
// function sum(arr) {
//   let a = arr[0]
//   let b = arr[1]
//   return a + b
// }

function sum([a, b]) {
  return a + b
}

console.log('Destructuring function: ' + sum([2, 3]))
