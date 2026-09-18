const datas = [
  { name: "ram", age: 21 },
  { name: "Laxman", age: 20 },
];

function getData() {
  setTimeout(() => {
    let output = "";

    datas.forEach((data, index) => {
      output += `${data.name} `;
    });

    console.log(output);
  }, 1000);
}

function createData(newData) {
  return new Promise((res, rej) => {
    let flag = true;

    setTimeout(() => {
      datas.push(newData);

      if (flag) {
        res("Addition Successful");
      } else {
        rej("Addition not successful");
      }
    }, 3000);
  });
}

createData({ name: "Sita", age: 19 })
  .then((message) => {
    console.log(message);
    getData();
  })
  .catch((error) => {
    console.log(error);
  });
