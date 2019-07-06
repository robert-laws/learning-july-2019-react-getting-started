// scopes
if(true) {
  // block scope
}

function testing() {
  // block scope
}

for (let i = 0; i <= 10; i++) {
  // block scope
}

function newTest() {
  if(true) {
    let name = 'bob'
    // variable is protected within block scope
  }
}

const number = 32; // will not change
let val = 23; // can change

// arrow functions
const name = myName => {
  return myName
}

name('Bob');

const person = {
  name: 'Bob',
  sayName: function() {
    let name = () => this.name;
    return name();
  }
};

console.log(person.sayName());

const square = a => a * a;

// object destructing
const friend = {
  name: 'Kal',
  age: 34,
}

const friend2 = {
  name: 'Jim',
}

function greeting ({ name, age = 20}) {
  return `hello ${name}, you are ${age} years old.`;
}

console.log(greeting(friend))
console.log(greeting(friend2))

const [first, ...remainingItems] = [1, 2, 3, 4]

console.log(first);
console.log(remainingItems);

const items = ['hat', 'cat', 'bat', 'pen']

console.log(
  ...items.map(item => {
    return item.toUpperCase()
  })
)

// template string
const hello = `
  <div>
    ${'bob'.toUpperCase()}
  </div>
`;

console.log(hello);

// Classes

class Car {
  constructor(model) {
    this.model = model
  }

  carType() {
    return `model - ${this.model}`
  }
}

let ford = new Car('ford');
console.log(ford.carType());

// Promise

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}

fetchData();