const firstName = "Alexandre";
const lastName = "Hermida";

const val = 42;
const res = val + 0.5;

const arr = [
  "string",
  42,
  function () {
    console.log("hi");
  },
  res,
];

arr[2](); //executa a função dentro do array

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ------------------------------------------------
// Typecasting - Coercion

const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log("Explicit: " + explicit + "  ::  Implicit: " + implicit);

/* ------------------------------------------------
  ==  VS ===

  == coerces the types
  === requires equivalent types
*/
console.log(typeof x);
console.log(typeof explicit);
console.log(typeof null);

// False and true
// Primitives vs Objects
// Primitives are immutable
// Objects are stored as reference, so mutable

const o = new Object();
o.firstName = firstName;
o.lastName = lastName;
o.isTeaching = false;
o.greet = function () {
  console.log("hello everyone!");
};

const o2 = {};
o2["lastName"] = "Hermida";
o2.firstName = "Alexandre 2";
const key = "isTeaching";
o2[key] = true;
o2["greet"] = function () {
  console.log("Hi everyone!");
};

const o3 = {
  lastName: "Hermida",
  firstName: "Alexandre 2",
  isTeaching: true,
  greet: function () {
    console.log("Hi everyone!");
  },
};

console.log(o3.firstName);
console.log(o3.greet());

o3.firstName = "Grande Alexandre";
console.log(o3.firstName);

const o4 = {
  a: "a",
  b: "b",
};

const o5 = o4;
const o6 = Object.assign({}, o4);

o4.a = "New Value";

console.log(o5.a);
console.log(o6.a);

// Object Wrappers for primitives - Autoboxing

const num1 = 42
num1.toString()  //Autoboxing
// ERRO -> 42.toString()


//----------------------------
const thisIsAConst = 51
// ERRO -> thisIsAConst = 52
let thisIsALet = 51
thisIsALet = 50 //OK
thisIsALet++

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'New value'


