let p=10,q=20


let y =10;
y++;
console.log(y);

y--;
console.log(y);

//assignment operator
console.log(p+q);
console.log(p-q);
console.log(p*q);
console.log(p/q);


//Relational operator
console.log(p>q);
console.log(p<q);
console.log(p>=q);
console.log(p<=q);
console.log(p==q);
console.log(p!=q);
let isLOGGEDIN = true;
let message = isLOGGEDIN ? "User is logged in" : "User is not logged in";
console.log(message);

//Equality operator (== vs ===)
let x = 5;
let y = "5";
console.log(x == y); // true (type coercion) loose equality
console.log(x === y); // false (no type coercion) strict equality