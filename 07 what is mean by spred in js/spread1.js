//spread operator
//...-expand elements-array1[10,20,30]-[...array1]

let arr1=[10,20,30,40,50];
let arr3=[60,70,80,90,100];
let arr2=[...arr1,...arr3];
console.log(arr2);

//spread operator with object
let student={
    name:"ram",
    age:21
}

let course ={
    title :"BE",
    sem:7
}
let studedentdetail={
    ...student,
    ...course
}
console.log(studedentdetail);
