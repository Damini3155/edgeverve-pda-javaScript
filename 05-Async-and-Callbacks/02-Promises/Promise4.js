//Promise.all()
const p1 = Promise.resolve("Ram");
const p2 = Promise.resolve("Shyam");
const p3 = Promise.resolve("Mohan");
const p4 = Promise.resolve("Sohan");

Promise.all([p1, p2, p3, p4]).then(result =>console.log(result));

//Promise.race() - return which promise is resolved first
const p5 = new Promise(resolve => setTimeout(()=>resolve("Ram"), 1000));
const p6 = new Promise(resolve => setTimeout(()=>resolve("Shyam"), 2000));
const p7 = new Promise(resolve => setTimeout(()=>resolve("Mohan"), 3000));

Promise.race([p5, p6, p7]).then(result => console.log(result));