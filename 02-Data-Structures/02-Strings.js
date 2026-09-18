let string1="Hello Students";

//indexOf
console.log(string1.indexOf("Students")); //at 6 Student word starts so 6 is returned

//charAt(index)
console.log(string1.charAt(4));

//split("splitChar")
console.log(string1.split(" "));
console.log(string1.split("e"));

//substring(start,end+1)
console.log(string1.substring(6,13));

//length: to get total no. of chars
console.log(string1.length); //.length() wrong // .length correct

//toUppercase() and toLowerCase()
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

//concat but will not change original string
console.log(string1.concat(" Are You understanding"));
console.log(string1);

//includes("targetString") to check if targetString is prsent or not
console.log(string1.includes("Students"));//yes
console.log(string1.includes("Student"));//yes
console.log(string1.includes("students"));//no as 'S' is upperCase not lower
console.log(string1.includes("llo"));

//indexOf(); we get first occurance
//lastindexOf(); we will get last occurance of it
//to get index of first occurance
console.log(string1.indexOf("l"));
console.log(string1.lastIndexOf("l"));

//startsWith()
console.log(string1.startsWith("H"));
console.log(string1.startsWith("h"));
//endsWith()
console.log(string1.endsWith("s"));
console.log(string1.startsWith("h"));

//replace(current,new)
console.log(string1.replace("Hello Students","Hello Team"));


//trim():is a string method used to remove extra spaces from the beginning and end of a string.

let string2="      hello goyss  "
console.log(string2);
console.log(string2.trim());