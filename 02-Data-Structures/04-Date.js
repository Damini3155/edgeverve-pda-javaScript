let today = new Date();
console.log(today)

console.log("time in millisecond",today.getTime());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getMonth());

today.setDate(20);
console.log(today.getDate());

let now = new Date();
console.log(now.toLocaleDateString())//print only date in string for
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());

let day = new Date("2026-05-31")
console.log(day)

if(day.getDay()===0 || day.getDay===6)
{
    console.log("WeekDay")
}else
{
    console.log("WeekEnd")
}

// Get today's date
let date = new Date();

console.log("Today:", date);

// Add 7 days
date.setDate(date.getDate() + 7);

console.log("After 7 days:", date);


// Create another date
let date1 = new Date();

console.log("Today:", date1);

// Subtract 5 days
date1.setDate(date1.getDate() - 5);

console.log("5 days before:", date1);


// Password creation date
const createdDate = new Date("2026-08-01");

console.log("Password created:", createdDate);


// Calculate expiry date (30 days after creation)
const expiryDate = new Date(createdDate);

expiryDate.setDate(expiryDate.getDate() + 30);

console.log("Password expires:", expiryDate);


// Check password status
const today1 = new Date();

if (today1 > expiryDate) {
    console.log("Password expired");
} else {
    console.log("Password active");
}


