let mobile = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: 64,
    price: 15000,
    action: " <input type='checkbox' id='samsung'",
  },
  {
    company: "Nokia",
    model: "S730",
    memory: 128,
    price: 15000,
    action: " <input type='checkbox' id='nokia'",
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: 32,
    price: 12000,
    action: " <input type='checkbox' id='xiaomi'",
  },
  {
    company: "Motorola",
    model: "G10",
    memory: 32,
    price: 15000,
    action: " <input type='checkbox' id='moto'",
  },
  {
    company: "Apple",
    model: "S12",
    memory: 64,
    price: 25000,
    action: " <input type='checkbox' id='apple'",
  },
];
console.log(mobile);
function showTable() {
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th><th>Action</th></tr>";
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
      e.action +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("tableShow").innerHTML = table;
  document.getElementById("deleteData").innerHTML =
    "<br><input type='button' onclick='delData()' value='Delete'>";
}
function delData() {
    let i=0;
    index=[];
  let samCheck = document.getElementById("samsung");
  let nolCheck = document.getElementById("nokia");
  let xiaCheck = document.getElementById("xiaomi");
  let motoCheck = document.getElementById("moto");
  let appCheck = document.getElementById("apple");
  console.log(samCheck.checked);
  if (samCheck.checked == true) {
    index[i++]=0;
  }
  if (nolCheck.checked == true) {
    index[i++]=1;
  }
  if (xiaCheck.checked == true) {
    index[i++]=2;
  }
  if (motoCheck.checked == true) {
    index[i++]=3;
  }
  if (appCheck.checked == true) {
    index[i++]=4;
  }
  for(let i=0;i<index.length;i++){
    var del=delete mobile[i];
  }
  console.log(index);
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th></tr>";
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
    "</tr>";
  });
  table += "</table>";
  document.getElementById("deleteData").innerHTML = table;
}
