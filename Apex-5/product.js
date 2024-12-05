const products = [
    { name: 'Winter Sweater', category: 'Clothing', price: 25.0, image: 'images/winter_sweater.jpg', rating: 4.8 },
    { name: 'Summer Dress', category: 'Clothing', price: 30.0, image: 'images/summer-wear.WEBP', rating: 4.6 },
    { name: 'Travel Backpack', category: 'Bags', price: 45.0, image: 'images/travel-backbag.WEBP', rating: 4.7 },
    { name: 'Running Shoes', category: 'Footwear', price: 35.0, image: 'images/running.WEBP', rating: 4.7 },
    { name: 'Leather Handbag', category: 'Bags', price: 50.0, image: 'images/handbag.jpg', rating: 4.7 },
    { name: 'Kids Jacket', category: 'Clothing', price: 20.0, image: 'images/kids-jacket.jpg', rating: 4.5 },
    { name: 'Woolen Scarf', category: 'Accessories', price: 15.0, image: 'images/Woolen-Scarf.jpg', rating: 4.3 },
    { name: 'Duffel Bag', category: 'Bags', price: 45.0, image: 'images/Duffel-Bag.jpg', rating: 4.5 },
    { name: 'Party Wear', category: 'Clothing', price: 95.0, image: 'images/party-wear.WEBP', rating: 4.9 },
    { name: 'Sunglasses', category: 'Accessories', price: 10.0, image: 'images/sunglasses.jpg', rating: 4.6 },
    { name: 'Hoodies', category: 'Clothing', price: 33.0, image: 'images/hoodie.AVif', rating: 4.6 },
    { name: 'Waterproof Boots', category: 'Footwear', price: 35.0, image: 'images/water-shoes.Avif', rating: 4.6 },
    { name: 'Travel Pillow', category: 'Accessories', price: 15.0, image: 'images/Travel-Pillow.jpg', rating: 4.5 },
    { name: 'Rolling Suitcase', category: 'Bags', price: 45.0, image: 'images/rolling-bag.jpg', rating: 4.9 },
    { name: 'Sport Wear', category: 'Clothing', price: 45.0, image: 'images/sport-wear.WEBP', rating: 4.3 },
    { name: 'Leather Loafers', category: 'Footwear', price: 40.0, image: 'images/Leather-Loafers.jpg', rating: 4.8 },
    { name: 'Watch', category: 'Accessories', price: 75.0, image: 'images/watch1.jpg', rating: 4.8 },
    { name: 'Causal Shoes', category: 'Footwear', price: 30.0, image: 'images/causal-shoes.jpg', rating: 4.5 },
    { name: 'Saree', category: 'Clothing', price: 45.0, image: 'images/saree.WEBP', rating: 4.8 },
    { name: 'Hiking Backpack', category: 'Bags', price: 36.0, image: 'images/Hiking-Backpack.jpg', rating: 4.8 },
    { name: 'Long Frock', category: 'Clothing', price: 65.0, image: 'images/long-fork.jpg', rating: 4.7 },
    { name: 'Ear Rings', category: 'Accessories', price: 95.0, image: 'images/ear-rings.jpg', rating: 4.9 },
    { name: 'Hiking Boots', category: 'Footwear', price: 45.0, image: 'images/Hiking-Boots.jpg', rating: 4.7 },
    { name: 'Raincoat', category: 'Clothing', price: 35.0, image: 'images/raincoat.WEBP', rating: 4.8 },
];

// script.js
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>rating: ${product.rating.toFixed(1)} ⭐</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function filterAndSortProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortPrice = document.getElementById('productSortPrice').value;
    const sortrating = document.getElementById('productSortrating').value;

    let filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    if (sortPrice === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sortrating === 'high-to-low') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortrating === 'low-to-high') {
        filteredProducts.sort((a, b) => a.rating - b.rating);
    }

    displayProducts(filteredProducts);
}

document.getElementById('categoryFilter').addEventListener('change', filterAndSortProducts);
document.getElementById('productSortPrice').addEventListener('change', filterAndSortProducts);
document.getElementById('productSortrating').addEventListener('change', filterAndSortProducts);

displayProducts(products);