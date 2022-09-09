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
function addtoArray(obj) {
  var ar = [];
  for (var x in obj) {
    if (obj.hasOwnProperty(x)) ar.push(obj[x]);
  }
  return ar;
}
samsungArray = addtoArray(samsung);
nokArray = addtoArray(nokia);
xiaArray = addtoArray(xiaomi);
motArray = addtoArray(moto);
appArray = addtoArray(apple);

let table =
  "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th></tr>";

function pushToArray(array){
    table +=
    "<tr><td>" +
    array[0] +
    "<td>" +
    array[1] +
    "</td><td>" +
    array[2] +
    "</td><td>" +
    array[3] +
    "</td>" +
    array[4] +
    "</td>" +
    "</tr>";
}
pushToArray(samsungArray);
pushToArray(nokArray);
pushToArray(xiaArray);
pushToArray(motArray);
pushToArray(appArray);
table+="</table>";
document.getElementById("showTable").innerHTML=table;