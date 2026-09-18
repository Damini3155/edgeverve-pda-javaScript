/*inheritance-parent class, child class
child class can inherit properties and methods from its parent class.
class classanme
}
class c1{ }
class c2 extends c1{}
child class can inherit from only one class.
doesnt support multiple inheritance.*/
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("hello" + this.name);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  study() {
    console.log("Are you understanding");
  }
}
const s1 = new Student("Ram");
s1.greet();
s1.study();