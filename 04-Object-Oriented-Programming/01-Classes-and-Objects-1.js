/*
OOP in JavaScript - design around objects.
Objects - real-world entities - properties and methods (behaviour).
Class - blueprint used to create objects.
Object is an instance of the class.
we dont have to use let var const 
class Classname {

    property1;
    property2;

    function method1() {
        
    }

    function method2() {
        
    }
}

objectcreation 
    const o1 = new classname(); construture isuse to create a instance of class it is a method which has same name as class

    every class will protoy they have share protoy they areclass proptoype but arrow function are not stored with class propetope they creat and store with object

    //javascript doesnt support multiple construture 

*/

class Student{
     name = "Ram";//property
     constructor(name,course)
     {
        this.name = name;
        this.course = course;
     }
     greet(){
        console.log("hello " + this.name + this.course);
     }

     Study=()=>{
        console.log("this is arrow function")
     }
}

const s1 = new Student("Damini","Ai&DS");
s1.greet();
s1.Study()

const car = {
  brand: "Hyundai",
  model: "i20",
  color: "White",
  display() {
    console.log(car.brand + car.model + car.color);
  },
};

car.display();

//using new object

const person = new Object();
person.name = "Ram";
person.branch = "CSe";
console.log(person.name + person.branch);


//using construture function 

//object created using constructor
const s1 = new Student("Laxman", "CSE");
const s2 = new Student("Bharat", "ECE");
s1.greet();
s1.study();
//object can also be created using object literal

const car = {