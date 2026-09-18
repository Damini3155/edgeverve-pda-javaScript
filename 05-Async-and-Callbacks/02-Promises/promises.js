// to overcome callback hell, we can use promises to handle asynchronous operations in a more manageable way. Promises allow us to chain multiple asynchronous operations together and handle errors more gracefully.

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected.

function dopooja()
{
    return new Promise((resolve, reject) => { let poojacompleted = true;
        if (poojacompleted) {
            console.log("Pooja completed successfully");
            resolve();
        } else {
            reject("Pooja failed");
        }
    });
}

function offerPrasad()
{ 
    console.log("Offering prasad");
}
function eatPrasad()
{
    console.log("Eating prasad");
}

dopooja()
.then(() => {
    offerPrasad();
})
.then(()=>{
    eatPrasad();
})
.catch((error) => {
    console.log(error);
});