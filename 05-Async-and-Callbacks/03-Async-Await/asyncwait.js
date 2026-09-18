/*
to overcome callback hell - Promises

to overcome Promise chaining - async/await

async/await - makes asynchronous code look like synchronous code

async - makes a function return a Promise

await - pauses the execution of its surrounding async function
        until the Promise is settled
*/

function doPooja() {
  return new Promise((resolve, reject) => {
    let poojaCompleted = false;

    if (poojaCompleted) {
      console.log("Pooja completed successfully");
      resolve();
    } else {
      reject("Pooja failed");
    }
  });
}

function offerPrasad() {
  return new Promise((resolve) => {
    console.log("Offering prasad");
    resolve();
  });
}

function eatPrasad() {
  return new Promise((resolve) => {
    console.log("Eating prasad");
    resolve();
  });
}

async function goTemple() {
  try{
    await doPooja();
  console.log("Finished pooja");

  await offerPrasad();
  console.log("Finished offering prasad");

  await eatPrasad();
  console.log("Finished eating prasad");
  }catch(error){
    console.log(error);
  }
}

goTemple()

