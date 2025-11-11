console.log("Hello world")

// creating vairale

// 01: let case (block scope but not redeclare in same scope)

let x = 12;
let _y = 5;
let $z = x + _y;
console.log($z)

// 02: const case  (block scope but not redeclare in same scope)

const x1 = 34;
const y1= 2;
const z1 = x1 + y1;
console.log(z1)

//03: automatically-case (but nit recommanded for developer)

a = 12;
b = 3;
c = a + b;
console.log(c)

// 04: var-case (but not recommanded for developer)
var a1 = 10;
var b1 = 3;
var c1 = a1 + b1;
console.log(c1)


// check type of the variable
console.log(typeof(c1))
