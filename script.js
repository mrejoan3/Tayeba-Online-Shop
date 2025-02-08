let cartCount = 0;
const products = [
    { id: 1, name: "Gaming Mouse", price: 29.99, image: "products/download.jpg" },
    { id: 2, name: "Gaming Keyboard", price: 49.99, image: "products/keyboard.jpg" },
    { id: 3, name: "Headphones", price: 59.99, image: "products/headphones.jpg" },
    { id: 4, name: "Gaming Chair", price: 199.99, image: "products/chair.jpg" },
    { id: 5, name: "Gaming Monitor", price: 799.99, image: "products/Monitor.jpg" },
    { id: 6, name: "Gaming Headphone", price: 99.99, image: "products/headphone.jpg" },
    { id: 7, name: "Gaming Air buds", price: 29.99, image: "products/mouse.jpg" },
    { id: 8, name: "Keyboard", price: 49.99, image: "products/keyboard.jpg" },
    { id: 9, name: "Wireless Keyboard", price: 59.99, image: "products/headphones.jpg" },
    { id: 10, name: "Wireless mouse", price: 199.99, image: "products/chair.jpg" },
    { id: 11, name: "Monitor Hp m22f", price: 799.99, image: "products/monitor.jpg" },
    { id: 12, name: "Otg", price: 99.99, image: "products/headphone.jpg" },
    { id: 13, name: "Apple Otg", price: 29.99, image: "products/mouse.jpg" },
    { id: 14, name: "Usb Hub", price: 49.99, image: "products/keyboard.jpg" },
    { id: 15, name: "Rgb Mouse pad", price: 59.99, image: "products/headphones.jpg" },
    { id: 16, name: "Gaming Controler", price: 199.99, image: "products/chair.jpg" },
    { id: 17, name: "Gaming 3d Curved Monitor", price: 799.99, image: "products/Curved monitor.jpg" },
    { id: 18, name: " Ps5", price: 99.99, image: "products/headphone.jpg" },
];

function loadProducts() {
    const gallery = document.getElementById('productGallery');
    gallery.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(this)">Add to Cart</button>
        `;

        gallery.appendChild(productCard);
    });
}

function addToCart(button) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    
    // Add order animation
    button.classList.add('ordered');
    button.innerText = "Added! ✅";
    
    setTimeout(() => {
        button.classList.remove('ordered');
        button.innerText = "Add to Cart";
    }, 1000);
}

function viewCart() {
    alert(`You have ${cartCount} items in your cart.`);
}

loadProducts();