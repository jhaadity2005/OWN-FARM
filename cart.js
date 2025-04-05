function renderProducts(products) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop';">
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">₹${product.price}</div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}
;