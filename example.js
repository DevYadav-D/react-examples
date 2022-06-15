// function sentence(name){
//     return function fullsentence(age){
//         return `My name is ${name} and ${age} years-old`
//     }
// }

// const s = sentence('Paul');

// console.log(s(37));
// console.log(s(25));

//closure
//1. we need at least 2 nested functions (inner , outer)
//2. inner function should use something from outer function. 
//3. outer function have to return declaration of inner funciton.

//pros
//-persistence
//cons
//-memory leak



// const uuid = () => {
//     let id = 0;
//     return () => {
//         let result = id;
//         id++;
//         return result;
//     }
// }
//alternate method of uuid (as an example of closure)
// const uuid = (id = 0) => () => id++;

// const u = uuid()
// console.log(u());
// console.log(u());
// console.log(u());
// console.log(u());


//Destructuring

// --Array

// const x = [1,2,3,4]
// const [a, b, ...c] = x; //* == ... it's an rest operator * in python and ... in js

// console.log(a);
// console.log(b);
// console.log(c);

// --Object

// const x ={a:1, b:2, d:4}
const x ={ b:2, d:4}

// const a = x.a;
const {a:aliased = 'elo', b, c = 'default', d} = x;

console.log(aliased, b, c, d);
