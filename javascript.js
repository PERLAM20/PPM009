let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    // Mostrar productos en el carrito
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Mostrar total
    document.getElementById("total").textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        alert(`Pedido realizado. Total a pagar: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
    }
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.getAttribute('data-category') === category || category === 'all') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
