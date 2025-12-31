let quantity = 1;

const minusBtn = document.querySelector(".quantity-box button:first-child");
const plusBtn = document.querySelector(".quantity-box button:last-child");
const quantityText = document.querySelector(".quantity-box span");
const addToCartBtn = document.querySelector(".add-to-cart");

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityText.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityText.textContent = quantity;
  }
});

addToCartBtn.addEventListener("click", () => {
  alert(`Added ${quantity} item(s) to cart`);
});
