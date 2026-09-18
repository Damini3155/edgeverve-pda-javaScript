// Demonstrates Class, Constructor, Object, Methods, Static Method, Inheritance, super(), and Method Overriding

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

let person = new Person("John", 30);
person.greet();

// Employee class
class Employee {
  constructor(EmpId, EmpName, Empage) {
    this.EmpId = EmpId;
    this.EmpName = EmpName;
    this.Empage = Empage;
  }

  display() {
    console.log(
      `Employee ID: ${this.EmpId}, Name: ${this.EmpName}, Age: ${this.Empage}`,
    );
  }

  swipedIn() {
    console.log(
      `Employee ID ${this.EmpId} has swiped in at ${new Date().toLocaleTimeString()}`,
    );
  }

  // Static method is called using the class name, not object name
  static code() {
    console.log("This is a static method");
  }
}

let emp = new Employee(101, "Alice", 28);

emp.display();
emp.swipedIn();

Employee.code();

console.log("ID: " + emp.EmpId);

// PartTimeEmployee inherits from Employee
class PartTimeEmployee extends Employee {
  constructor(EmpId, EmpName, Empage, hoursWorked) {
    super(EmpId, EmpName, Empage);
    this.hoursWorked = hoursWorked;
  }

  // Method overriding
  swipedIn() {
    console.log(
      `Part Time Employee ID ${this.EmpId} has swiped in at ${new Date().toLocaleTimeString()}`,
    );

    super.swipedIn();
  }
}

let empobj = new PartTimeEmployee(102, "Bob", 25, 20);

empobj.display();
empobj.swipedIn();
