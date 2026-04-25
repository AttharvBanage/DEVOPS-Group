let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
    updateCartCount();
}

function updateCartCount() {
    let count = cart.length;
    let elements = document.querySelectorAll("#cart-count");
    elements.forEach(el => el.innerText = count);
}

function loadCart() {
    let cartDiv = document.getElementById("cart-items");
    let total = 0;

    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
            <div>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function checkout() {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    location.reload();
}

updateCartCount();
loadCart();

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

function checkout() {
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    document.getElementById("success-box").style.display = "block";

    localStorage.removeItem("cart");
    cart = [];

    loadCart();
    updateCartCount();
}