let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price, image){
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart!");
}

// UPDATE CART COUNT (navbar)
function updateCartCount() {
    let count = cart.length;
    let elements = document.querySelectorAll("#cart-count");
    elements.forEach(el => el.innerText = count);
}

// LOAD CART ITEMS (for cart page)
function loadCart() {
    let cartDiv = document.getElementById("cart-items");
    let total = 0;

    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
        <div class="cart-item">
            <span>${item.name} - ₹${item.price}</span>
            <div>
                <button onclick="removeItem(${index})">❌</button>
            </div>
        </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// CHECKOUT
function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    document.getElementById("success-box").style.display = "block";

    localStorage.removeItem("cart");
    cart = [];

    loadCart();
    updateCartCount();
}

// RUN ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
    loadCart();
});
