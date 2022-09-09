let products = [];
function addPro() {
  let vars = {
    model: document.getElementById("prodName").value,
    quantity: document.getElementById("quantity").value,
  };
  products.push(vars);
}
function generateBill() {
  let total = 0;
  let model = document.getElementById("prodName").value;
  let quantity = document.getElementById("quantity").value;
  let table = "<h2>Bill</h2>";
  // let i=0;
  table +=
    "<table><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";
  for (let i = 0; i < products.length; i++) {
    if (model == "samsung" || model == "nokia" || model == "motorola") {
      total += 15000 * quantity;
      table +=
        "<tr><td>" +
        products[i].model +
        "</td><td>" +
        products[i].quantity +
        "</td><td>15000</td></tr>";
    } else if (model == "apple") {
      total += 25000 * quantity;
      table +=
        "<tr><td>" +
        products[i].model +
        "</td><td>" +
        products[i].quantity +
        "</td><td>25000</td></tr>";
    } else if ((model = "xiaomi")) {
      total += 12000 * quantity;
      table +=
        "<tr><td>" +
        products[i].model +
        "</td><td>" +
        products[i].quantity +
        "</td><td>12000</td></tr>";
    }
  }

  table += "<tr><td>Total</td><td></td><td>" + total + "</td><tr></table>";
  document.getElementById("show").innerHTML = table;
}
