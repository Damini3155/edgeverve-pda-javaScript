// class Dog {
//   speak() {
//     console.log("Dog Barks");
//   }
// }

// class Cat {
//   speak() {
//     console.log("Cat Meows");
//   }
// }

// function makesound(animal) {
//   animal.speak();
// }

// const dog = new Dog();
// const cat = new Cat();
// makesound(dog);
// makesound(cat);

//runtime polymorphism-method overriding-parent class with  a method, same 

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog Barks");
  }
}

const dog = new Dog();
const cat = new cat();
dog.speak();

//compile teime
//compile time(method overloading) polymorphism
class Calculator {
    calculate(a, b) {
        return a + b;
    }
    calculate(a, b, c) {
        return a + b + c;
    }
}

const c1 = new Calculator();
console.log(c1.calculate(1, 2, 3));