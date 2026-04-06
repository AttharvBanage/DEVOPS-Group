let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART WITH QUANTITY
function addToCart(name, price) {
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// DISPLAY CART
function loadCart() {
  let cartDiv = document.getElementById("cartItems");
  let totalDiv = document.getElementById("totalPrice");

  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty</p>";
    totalDiv.innerHTML = "";
    return;
  }

  cart.forEach((item, index) => {
    let div = document.createElement("div");

    div.innerHTML = `
      ${item.name} - ₹${item.price} × ${item.quantity}
      <button onclick="increaseQty(${index})">+</button>
      <button onclick="decreaseQty(${index})">-</button>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartDiv.appendChild(div);

    total += item.price * item.quantity;
  });

  totalDiv.innerHTML = "Total: ₹" + total;
}

// INCREASE
function increaseQty(index) {
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// DECREASE
function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// REMOVE
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// CHECKOUT
function checkout() {
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  location.reload();
}

// LOAD ON PAGE
window.onload = loadCart;