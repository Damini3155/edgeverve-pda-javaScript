//Regular Expression
let regexp = /hi/;
console.log(regexp);

let regexp1 = RegExp("hi");
console.log(regexp1);

let text1 = "hi hello hi hello hi hello";
let n = text1.search(regexp1);
console.log(n); //0 as first occurance of hi is at 0th index

let n1 = text1.search(/hello/i); //i is for case insensitive
console.log(n1);

let n2 = text1.match(/e/gi); //ig used for case insensitive and global search
console.log(n2);

// match() method is used to match a string against a regular expression and returns an array of matches found. If no match is found, it returns null.

let text2 = "The rain in SPAIN stays mainly in the plain";
let n3 = text2.match(/ain|in/gi);
console.log(n3);

let text3 = "aaaaaaabbbbcccccc";
let regex3 = /(aa)(bb)(cc)/d; //d is for duplicate
let n4 = text3.match(regex3);
console.log(n4); //null as there is no duplicate in the string
// [] -- class of characters -- [abc]
// [^a] -- not a
// [0-9] -- any digit
// [^0-9] -- not a digit
// [a-z] -- all alphabets

let text4 = "abcdxyz1234";

let result1 = text4.match(/[^123]/g);

console.log(result1);
// metacharacters
// \d -- digit
// \D -- non-digit
// \w -- word character
// \W -- non-word character
// \s -- whitespace
// \S -- non-whitespace

let text5 = "Understanding 100%";
let result2 = text5.match(/\d/g);
console.log(result2);

//Regex Assertion ---match boundaries and lookaround assertions
// ^ -- start of string
// $ -- end of string

let text6 = "hi students";
console.log("text6 " + text6.match(/^hi/));
console.log("text6 " + text6.match(/s$/));

// Regex Assertions --- match boundaries and lookarounds
// /^ - beginning / $ - end, (?=...)

// (?=y) - matches all the x only if followed by y.
let text6Lookahead = "10pt 20pt 300pt";
console.log(text6Lookahead.match(/\d+(?=pt)/g));

// (?<=Y)X - matches all the X if preceded by Y
let text7 = "$100 $200 $300";
console.log(text7.match(/(?<=\$)\d+/g));

let text8 = "$100 $200 $300";
console.log(text8.match(/(?<=\$)\d+/g));//match all digits that are preceded by a dollar sign