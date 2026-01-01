let quantity = 1;

function increaseQty() {
  quantity++;
  document.getElementById("qty").innerText = quantity;
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qty").innerText = quantity;
  }
}

function addToCart() {
  alert("Plum Brownie Cake added to cart! Quantity: " + quantity);
}
