// Global array to store customer information
let customers = [];

// Get the form
let form = document.getElementById("customerForm");

// Add submit event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values from input fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // Create customer object
  let customer = {
    name: name,
    email: email,
    age: age,
    height: height,
    weight: weight,
  };

  // Store object in global array
  customers.push(customer);

  // Display customer details
  displayCustomers();

  // Clear form
  form.reset();
});

// Function to display customers
function displayCustomers() {
  let tableBody = document.getElementById("customerTableBody");

  tableBody.innerHTML = "";

  // Loop through global array
  customers.forEach(function (customer) {
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.age}</td>
            <td>${customer.height}</td>
            <td>${customer.weight}</td>
        `;

    tableBody.appendChild(row);
  });
}
