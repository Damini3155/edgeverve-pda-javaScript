//callback functions are functions that are passed as arguments to other functions and are executed after some operation has been completed. They are commonly used in asynchronous programming to handle events or operations that take time to complete, such as reading files, making network requests, or performing database queries.
function dopooja(callback) {
    console.log("doing pooja");
    callback();
}

function offeringprasad(callback) {
    console.log("offering prasad");
    callback();
}
function eatprasad() {
    console.log("eating prasad");
}
dopooja(() => {
    offeringprasad(eatprasad);
});