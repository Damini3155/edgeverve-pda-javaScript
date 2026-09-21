const email = "test@gmail.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailRegex.test(email)) {
  console.log("Valid Email");
}

const domain = email.split("@")[1];
console.log("Domain : " + domain);

const currentDate = new Date();
console.log(currentDate.toDateString());
