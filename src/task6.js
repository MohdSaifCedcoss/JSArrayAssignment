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
  let i = 0;
  index = [];
  let samCheck = document.getElementById("samsung");
  let nokCheck = document.getElementById("nokia");
  let xiaCheck = document.getElementById("xiaomi");
  let motoCheck = document.getElementById("moto");
  let appCheck = document.getElementById("apple");

  if (samCheck.checked == true) {
    mobile.splice(0, 1);
  }
  if (nokCheck.checked == true) {
    if (samCheck.checked == true) {
      mobile.splice(0, 1);
    } else {
      mobile.splice(1, 1);
    }
  }
  if (xiaCheck.checked == true) {
    if (samCheck.checked == true && nokCheck.checked == true) {
      mobile.splice(0, 1);
    } else if (samCheck.checked == true || nokCheck.checked == true) {
      mobile.splice(1, 1);
    } else {
      mobile.splice(2, 1);
    }
  }
  if (motoCheck.checked == true) {
    if (
      samCheck.checked == true &&
      nokCheck.checked == true &&
      xiaCheck.checked == true
    ) {
      mobile.splice(0, 1);
    } else if (samCheck.checked == true || nokCheck.checked == true) {
      mobile.splice(1, 1);
    } else if (xiaCheck.checked == true) {
      mobile.splice(2, 1);
    } else {
      mobile.splice(3, 1);
    }
  }
  if (appCheck.checked == true) {
    mobile.pop();
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
