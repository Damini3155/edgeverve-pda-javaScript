//synchronous vs Asynchronous programming
//synchronous programming is a programming paradigm where tasks are executed one after another, blocking the execution of subsequent tasks until the current task is completed. In contrast, asynchronous programming allows tasks to be executed independently, enabling other tasks to run while waiting for a particular task to complete. This can lead to improved performance and responsiveness in applications, especially in scenarios involving I/O operations or network requests.
//asynchronous programming is often implemented using callbacks, promises, or async/await syntax in modern programming languages. It allows developers to write non-blocking code that can handle multiple operations concurrently, making it suitable for applications that require high scalability and responsiveness.

// Example of synchronous programming
console.log("Start");
function greet(name)
{   for(let i=0;i<100;i++){
    for(let j=0;j<100;j++){}
} //simulating a time-consuming task
    console.log("Hello " + name);
}
greet("Alice");
console.log("End");

//Asynchronous programming example using setTimeout
console.log("Start");
setTimeout(() => {console.log("Hello");
    }, 2000); //simulating a time-consuming task with a delay of 2 seconds)
console.log("End");