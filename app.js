// Datos iniciales de productos
const products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Smartphone', price: 400 },
    { id: 3, name: 'Tablet', price: 200 },
];

// Obtener referencia a elementos del DOM
const productListElement = document.getElementById('product-list');
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');

// Función para renderizar la lista de productos
function renderProductList() {
    productListElement.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al carrito</button>
                </div>
            </div>
        `;
        productListElement.appendChild(card);
    });
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Agregar al carrito
        cart.push(product);
        // Actualizar el carrito en el storage
        updateCartInStorage();
        // Renderizar el carrito
        renderCart();
    }
}

// Función para renderizar el carrito
function renderCart() {
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += item.price;
    });
    totalElement.textContent = totalPrice.toFixed(2);
}

// Función para actualizar el carrito en el storage
function updateCartInStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar el carrito desde el storage
function loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        renderCart();
    }
}

// Función para realizar la compra
function checkout() {
    alert('¡Compra realizada con éxito!');
    // Puedes realizar acciones adicionales aquí (limpiar carrito, etc.)
}

// Evento click en el botón de checkout
checkoutBtn.addEventListener('click', checkout);

// Inicializar la aplicación
let cart = [];
loadCartFromStorage();
renderProductList();
