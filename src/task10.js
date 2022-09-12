const mobile = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: 64,
    price: 15000,
  },
  {
    company: "Nokia",
    model: "S730",
    memory: 128,
    price: 22000,
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: 32,
    price: 12000,
  },
  {
    company: "Motorola",
    model: "G10",
    memory: 32,
    price: 15000,
  },
  {
    company: "Apple",
    model: "S12",
    memory: 64,
    price: 25000,
  },
];
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
    "</td><td>";
});
table += "</table>";
document.getElementById("show").innerHTML = table;

function seacrhPrice() {
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th></tr>";
    let value=false;
  mobile.forEach((e) => {
    if (e.price >= min && e.price <= max) {
        table +=
        "<tr><td>" +
        e.company +
        "<td>" +
        e.model +
        "</td><td>" +
        e.memory +
        "</td><td>" +
        e.price +
        "</td><td>";
        value=true;
    }
  });
  table += "</table>";
  if(value==false){
    document.getElementById("showRes").innerHTML = "No match found !";
    return;
  }
document.getElementById("showRes").innerHTML = table;
}
