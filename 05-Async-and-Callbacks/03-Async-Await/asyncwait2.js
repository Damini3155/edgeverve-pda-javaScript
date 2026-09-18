let datas = [];

function createData(name, age) {
  return new Promise((resolve, reject) => {
    let dataCreated = true;

    if (dataCreated) {
      datas.push(name);
      datas.push(age);

      console.log("Data created successfully");

      resolve();
    } else {
      reject("Data creation failed");
    }
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    let dataReceived = false;

    if (dataReceived) {
      let output = "";

      datas.forEach((data, index) => {
        output += data + " ";
      });

      resolve(output);
    } else {
      reject("No data received");
    }
  });
}

async function updatedata() {
try{
    await createData("Bharat", 19);
    console.log("Data updated successfully");
    let result = await getData();
    console.log("Data received successfully");
    console.log("Data:", result);
}catch(error){
    console.log(error);
};
   
  } 

updatedata();
