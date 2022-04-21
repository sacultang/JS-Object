/* 

Object.assign() 

*/

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign({},target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(target === returnedTarget)

// const a = { k : 123}
// const b = { k : 123}
// console.log(a === b)

/* 

Object.keys() 

*/

const user = {
  name: 'Oj',
  age: 85,
  email: 'sacultang@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])
console.log(user.email)

const values = keys.map(key => user[key])
console.log(values)