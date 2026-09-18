function prepareBiryani(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Biryani is ready!");
      } else {
        reject("Failed to prepare Biryani.");
      }
    }, 2000);
  });
}

function displayPrice(price) {
  console.log(`Total Price: ${price}`);
}

function orderBiryani() {
  return new Promise((resolve, reject) => {
    const biryaniAvailable = true;

    if (biryaniAvailable) {
      const order = {
        item: "Veg Biryani",
        price: 350,
      };

      console.log("Order placed successfully");

      prepareBiryani(order)
        .then((message) => {
          console.log(message);
          displayPrice(order.price);
          resolve(order);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject("Biryani not available");
    }
  });
}

orderBiryani()
  .then((order) => {
    console.log("Order completed:", order);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
