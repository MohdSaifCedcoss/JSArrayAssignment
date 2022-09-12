const mobile = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: 64,
    price: 15000,
    rating: 0,
  },
  {
    company: "Nokia",
    model: "S730",
    memory: 128,
    price: 15000,
    rating: 0,
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: 32,
    price: 12000,
    rating: 0,
  },
  {
    company: "Motorola",
    model: "G10",
    memory: 32,
    price: 15000,
    rating: 0,
  },
  {
    company: "Apple",
    model: "S12",
    memory: 64,
    price: 25000,
    rating: 0,
  },
];
let table =
  "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th><th>Ratings</th></tr>";
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
    e.rating +
    "</td></tr>";
});
table += "</table>";
document.getElementById("show").innerHTML = table;

function rate() {
  let mod = document.getElementById("selModel").value;
  let rate = document.getElementById("selRating").value;

  if (mod == "Samsung") {
    mobile[0].rating = rate;
  } else if (mod == "Nokia") {
    mobile[1].rating = rate;
  } else if (mod == "Xiaomi") {
    mobile[2].rating = rate;
  } else if (mod == "Moto") {
    mobile[3].rating = rate;
  } else if (mod == "Apple") {
    mobile[4].rating = rate;
  }
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th><th>Ratings</th></tr>";
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
      e.rating +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("show").innerHTML = table;
}
