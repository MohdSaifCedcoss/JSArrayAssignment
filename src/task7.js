let mobile = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: 64,
    price: 15000,
    quantity: 0,
  },
  {
    company: "Nokia",
    model: "S730",
    memory: 128,
    price: 15000,
    quantity: 0,
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: 32,
    price: 12000,
    quantity: 0,
  },
  {
    company: "Motorola",
    model: "G10",
    memory: 32,
    price: 15000,
    quantity: 0,
  },
  {
    company: "Apple",
    model: "S12",
    memory: 64,
    price: 25000,
    quantity: 0,
  },
];
function showTable() {
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th><th>Quantity</th></tr>";
  mobile.forEach((e) => {
    table +=
      "<tr><td>" +
      e.company +
      "<td>" +
      e.model +
      "</td><td>" +
      e.memory +
      "</td><td>" +
      e.price +
      "</td><td>" +
      e.quantity +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("tableShow").innerHTML = table;
}
function addProducts() {
  let mod = document.getElementById("selModel").value;
  let quan = document.getElementById("quantity").value;
  if (mod == "Samsung") {
    mobile[0].quantity = quan;
  }
  else if(mod=="Nokia"){
    mobile[1].quantity=quan;
  }
  else if(mod=="Xiaomi"){
    mobile[2].quantity=quan;
  }
  else if(mod=="Moto"){
    mobile[3].quantity=quan;
  }
  else if(mod=="Apple"){
    mobile[4].quantity=quan;
  }
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th><th>Quantity</th></tr>";
  mobile.forEach((e) => {
    table +=
      "<tr><td>" +
      e.company +
      "<td>" +
      e.model +
      "</td><td>" +
      e.memory +
      "</td><td>" +
      e.price +
      "</td><td>" +
      e.quantity +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("showRes").innerHTML = table;
}
