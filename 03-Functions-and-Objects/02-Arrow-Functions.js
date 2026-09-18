function sayhello() {
    return "hello";
}

console.log(sayhello());

const sayHi = () => "hi";
console.log(sayHi());

function sum(a, b) {
    const sumup = a + b;
    return sumup;
}

console.log(sum(10, 20));

// Arrow function with multiple parameters and multiple statements should be wrapped in curly braces and return statement is required.
const sum1 = (a, b) => {
    const sumup = a + b;
    return sumup;
};

console.log(sum1(20, 30));

const person = 
{
    name: "John",
    sayhi: function() {
        console.log("Hi, I am " + this.name);
    }
}

person.sayhi();