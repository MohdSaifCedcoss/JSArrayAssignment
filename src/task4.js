function addData() {
  let mobile = [
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
      price: 15000,
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

  let comp = document.getElementById("comp").value;
  let mod = document.getElementById("mod").value;
  let memo = document.getElementById("memo").value;
  let pric = document.getElementById("pric").value;

  var obj={
    company:comp,
    model:mod,
    memory:memo,
    price:pric
  }
  mobile.push(obj);
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
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("show").innerHTML = table;
}
