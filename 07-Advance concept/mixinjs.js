// Define the mixin object with the required methods
const studyMixin = {
  study() {
    console.log((this.name || "It") + " is studying.");
  },
  enjoy() {
    console.log((this.name || "It") + " is enjoying.");
  },
};

// Define student and employee objects
const student = { name: "Student" };
const employee = { name: "Employee" };

// Define the Person constructor function
function Person(name) {
  this.name = name;
}

// --- Code from your screenshot ---
// js method used to copy from one target to another
// Object.assign(target, source)
console.log("Student");
Object.assign(student, studyMixin);
student.study();
student.enjoy();

console.log("Employee");
Object.assign(employee, studyMixin);
employee.study();
employee.enjoy();

console.log("Person");
Object.assign(Person, studyMixin);
Person.study();
Person.enjoy();
/*
 * Prototype:
 * A prototype is a shared object where methods and properties
 * can be stored and accessed by multiple objects.
 *
 * This helps save memory because the method is stored once
 * in the prototype instead of creating a separate copy
 * for every object.
 */
Object.assign(Person.prototype, studyMixin);
const p1 = new Person("Sita");
const p2 = new Person("Laxman");
p1.study();
p2.enjoy();
