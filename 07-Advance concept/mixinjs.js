// Contains methods that can be used by other objects/classes
// without using inheritance

const studyMixin = {
  study() {
    console.log("studying");
  },

  enjoy() {
    console.log("enjoying");
  },
};

let student = {
  name: "Ram",
};

// JS method used to copy properties/methods
// Object.assign(target, source)

Object.assign(student, studyMixin);

student.study();
student.enjoy();
