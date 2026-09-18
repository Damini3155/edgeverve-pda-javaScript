//1 function
function greeting() {
  console.log("Hello!");
}
greeting();

//2 function with parameter
function greeting1(user1) {
  console.log("Hello, " + user1 + "!");
}

let user1 = "John";
greeting1(user1);

//3 function with return value
let d = 30;

function sum(a, b) {
  let c = 20;

  console.log(c);
  console.log(d);

  return a + b + c + d;
}

let sum1 = sum(10, 20);

console.log(sum1);


function abc(user2 = "Guest") {
  console.log("Hello!");
  console.log(user2);
}   

abc("John");
abc(); // Uses the default value "Guest"

//4 function with rest parameter
function multiply(...args) {
    let product = 1;
    for (let i = 0; i < args.length; i++) {
        product *= args[i];
    }
    return product;
}
let result = multiply(2, 3, 4,5); // result will be 24 (2 * 3 * 4)
console.log("Product: " + result);
//5 function with object destructuring
let student = {
    name: "John",
    age: 20,
    city:"Pune"
}
function displayStudentInfo({ name, age, city }) 
{
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
    console.log("Student City: " + city);
}
displayStudentInfo(student);

//arrow function  reduce syntax and makes the code more concise. It is especially useful for short functions or when using higher-order functions like map, filter, and reduce.
let add = (a, b) => a + b; 
console.log(add(5, 3)); // returns 8

let square = (x) => x * x;
console.log(square(4)); // returns 16

let greet = () => console.log("Hello!");
greet(); // prints "Hello!"


function reverse(str)
{
    return str.split("").reverse().join("");
}
console.log(reverse("Hello")); // prints "olleH"