//If-Else Statement
let age = 60;
if (age >= 60) {
  console.log("This person is a senior citizen");
} else {
  console.log("This person is not a senior citizen");
}

//if-else ladder statement
let score = 85;
if (score >= 90) {
  console.log("This student has an A grade");
} else if (score >= 80) {
  console.log("This student has a B grade");
} else {
  console.log("This student is average");
}

//Switch Statement

let day = "friday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  default:
    console.log("Not a valid day");
}

// LOOPS
for (let i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even number");
  } else {
    console.log(i + " is odd number");
  }
}

//break continue statement
for (let i = 1; i <= 10; i++) {
  if (i / 2 == 0) {
    console.log(i + " is even number");
    continue;
  }
  if (i == 7) {
    console.log(i + " is the number we are looking for");
    break;
  }
}

// for-in loop
const user = {
  name: "John",
  age: 30,
  role: "admin",
};

for (const key in user) {
  console.log(key + ": " + user[key]);
}

let cart = {
  items: [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
  ],
};

for (const item of cart.items) {
  console.log(item.name + ": $" + item.price);
}

let calendar = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

for (let day in calendar) {
  if (day == 6 || day == 7) {
    console.log(calendar[day] + " - Weekend");
  } else {
    console.log(calendar[day] + " - Weekday");
  }
}

const userMap = new Map(
    [
        ["name" , "Ramesh"],
            ["age",30],
            ["Role","System Engineer"]
    ]
);

for (const[key,value] of userMap){
    console.log(key + ": " + value);
}