let TV = {
  name: "TV",
  status: "off",
};

let Lamp = {
  name: "Lamp",
  status: "off",
};

let Oven = {
  name: "Oven",
  status: "off",
};

function turnOnAppliance(appliance) {
  try {
    if (appliance.status === "on") {
      throw new Error(appliance.name + " is already ON");
    }

    appliance.status = "on";

    return appliance.name + " turned ON";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Operation completed");
  }
}

function turnOffAppliance(appliance) {
  try {
    if (appliance.status === "off") {
      throw new Error(appliance.name + " is already OFF");
    }

    appliance.status = "off";

    return appliance.name + " turned OFF";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Operation completed");
  }
}

console.log(turnOnAppliance(TV));
console.log(turnOnAppliance(Lamp));
console.log(turnOnAppliance(Oven));

console.log(turnOffAppliance(TV));
console.log(turnOffAppliance(Lamp));
console.log(turnOffAppliance(Oven));

console.log(turnOffAppliance(TV));
