let balance = 10000;
let price = 500;

function buyStock() {
  if (balance >= price) {
    balance -= price;
    document.getElementById("balance").innerText = balance;
    alert("Stock Bought!");
  } else {
    alert("Insufficient Balance");
  }
}

function sellStock() {
  balance += price;
  document.getElementById("balance").innerText = balance;
  alert("Stock Sold!");
}
