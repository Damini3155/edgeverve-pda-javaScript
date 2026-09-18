const datas = [
  { name: "ram", age: 21 },
  { name: "Laxman", age: 20 },
];

function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    console.log(output);
  }, 1000);
}

function createData(newData) {
  setTimeout(() => {
    datas.push(newData);
  }, 3000);
}

createData({ name: "Bharat", age: 19 });
getData();
