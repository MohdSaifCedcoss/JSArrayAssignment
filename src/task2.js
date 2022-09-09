function search() {
  var samsung = {
    company: "Sasmung",
    model: "Galaxy",
    memory: 64,
    price: 15000,
  };
  var nokia = {
    company: "Nokia",
    model: "S730",
    memory: 128,
    price: 12000,
  };
  var xiaomi = {
    company: "Xiaomi",
    model: "Note",
    memory: 32,
    price: 12000,
  };
  var moto = {
    company: "Motorola",
    model: "G10",
    memory: 32,
    price: 15000,
  };
  var apple = {
    company: "Apple",
    model: "S12",
    memory: 64,
    price: 25000,
  };
  let key = document.getElementById("toSearch").value;
  let text;
  key=key.toLowerCase();
  if (key == "apple") {
    text =
      "Company\b" +
      apple.company +
      "<br>Model\b\b" +
      apple.model +
      "<br>Memory\b\b" +
      apple.memory +
      "<br>Price\b\b" +
      apple.price;
  }
  else if(key=="samsung"){
    text =
      "Company\b" +
      samsung.company +
      "<br>Model\b\b" +
      samsung.model +
      "<br>Memory\b\b" +
      samsung.memory +
      "<br>Price\b\b" +
      samsung.price;
  }
  else if(key=="xiaomi"){
    text =
      "Company\b" +
      xiaomi.company +
      "<br>Model\b\b" +
      xiaomi.model +
      "<br>Memory\b\b" +
      xiaomi.memory +
      "<br>Price\b\b" +
      xiaomi.price;
  }
  else if(key=="motorola"){
    text =
    "Company\b" +
    moto.company +
    "<br>Model\b\b" +
    moto.model +
    "<br>Memory\b\b" +
    moto.memory +
    "<br>Price\b\b" +
    moto.price;
  }
  else if(key=="nokia"){
    text =
    "Company\b" +
    nokia.company +
    "<br>Model\b\b" +
    nokia.model +
    "<br>Memory\b\b" +
    nokia.memory +
    "<br>Price\b\b" +
    nokia.price;
  }
  else{
    text="Entered Product is Not availabe or please re-check!"
  }
  document.getElementById("show").innerHTML = text;
}
