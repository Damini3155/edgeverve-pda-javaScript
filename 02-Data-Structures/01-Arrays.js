// array is an array of objects that contains the data for each item in the list

let arr1 = [1,2,'three',4.5,5];
console.log(arr1);

console.log(arr1[2]); // Accessing the third element in the array

console.log('index of 4.5 is: ' + arr1.indexOf(4.5)); // Finding the index of 4.5 in the array

arr1.push(6); // Adding a new element to the end of the array
console.log("arr1 after pushing 6: " + arr1);
arr1.pop(); // Removing the last element from the array
console.log("arr1 after popping: " + arr1);
arr1.shift(); // Removing the first element from the array
console.log("arr1 after shifting: " + arr1);
arr1.unshift(0); // Adding a new element to the beginning of the array
console.log("arr1 after unshifting 0: " + arr1);

arr1.forEach((item) => {console.log(item)}); // Iterating through the array and logging each item
console.log("arr1 after forEach: " + arr1);

let arr2 = arr1.map(item=>{
    if(typeof(item)==='string')
        return item.toUpperCase();
        else return item;
    })

console.log("arr2 after map: " + arr2);

let arr3 = arr1.map(item=>{
    if(typeof(item)==='number')
        return item * 2;
    else
        return item;
})
console.log("arr3 after map: " + arr3);

let filterredArray = arr1.filter(item=>{
    return typeof(item)==='number';
})
console.log("filtered array: " + filterredArray);

let foundelemet = arr1.find(item=>   item=='hi')
console.log("found element: " + foundelemet);

let foundIndex = arr1.findIndex(item=>   item==5)
console.log("found index: " + foundIndex);

let splicedArray = arr1.splice(2, 2);
console.log("spliced array: " + splicedArray);

// Adding elements at index 2 without removing any elements
arr1.splice(2,0,2,3,4)
console.log("arr1 after splicing: " + arr1);
