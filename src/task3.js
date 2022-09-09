function sorts() {
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
  let order = document.getElementById("order").value;
  let sortBy = document.getElementById("sortBy").value;
  if (order == "ascending" && sortBy == "memory") {
    mobile.sort((a, b) => {
      return a.memory - b.memory;
    });
  } else if (order == "descending" && sortBy == "memory") {
    mobile.sort((a, b) => {
      return b.memory - a.memory;
    });
  } else if (order == "ascending" && sortBy == "price") {
    mobile.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (order == "descending" && sortBy == "price") {
    mobile.sort((a, b) => {
      return b.price - a.price;
    });
  } 
  else if (order == "ascending" && sortBy == "company") {
    mobile.sort((a, b) => {
      let fa = a.company.toLowerCase(),
        fb = b.company.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  } 
  else if (order == "descending" && sortBy == "company") {
    mobile.sort((a, b) => {
        let fa = a.company.toLowerCase(),
          fb = b.company.toLowerCase();
  
        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
  }
  else if (order == "ascending" && sortBy == "model") {
    mobile.sort((a, b) => {
        let fa = a.model.toLowerCase(),
          fb = b.model.toLowerCase();
  
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
  }
  else if (order == "descending" && sortBy == "model") {
    mobile.sort((a, b) => {
        let fa = a.company.toLowerCase(),
          fb = b.company.toLowerCase();
  
        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
  }
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
