const products = [
    { id: 1, name: 'Winter Sweater', category: 'Clothing', price: 25.0 },
    { id: 2, name: 'Summer Dress', category: 'Clothing', price: 30.0 },
    { id: 3, name: 'Travel Backpack', category: 'Bags', price: 45.0 },
    { id: 4, name: 'Running Shoes', category: 'Footwear', price: 35.0 },
    { id: 5, name: 'Leather Handbag', category: 'Bags', price: 50.0 },
    { id: 6, name: 'Kids Jacket', category: 'Clothing', price: 20.0 },
    { id: 7, name: 'Woolen Scarf', category: 'Accessories', price: 15.0 },
    { id: 8, name: 'Duffel Bag', category: 'Bags', price: 45.0 },
    { id: 9, name: 'Party Wear', category: 'Clothing', price: 95.0 },
    { id: 10, name: 'Sunglasses', category: 'Accessories', price: 10.0 },
    { id: 11, name: 'Hoodies', category: 'Clothing', price: 33.0 },
    { id: 12, name: 'Waterproof Boots', category: 'Footwear', price: 35.0 },
    { id: 13, name: 'Travel Pillow', category: 'Accessories', price: 15.0 },
    { id: 14, name: 'Rolling Suitcase', category: 'Bags', price: 45.0 },
    { id: 15, name: 'Sport Wear', category: 'Clothing', price: 45.0 },
    { id: 16, name: 'Leather Loafers', category: 'Footwear', price: 40.0 },
    { id: 17, name: 'Watch', category: 'Accessories', price: 75.0 },
    { id: 18, name: 'Casual Shoes', category: 'Footwear', price: 30.0 },
    { id: 19, name: 'Saree', category: 'Clothing', price: 45.0 },
    { id: 20, name: 'Hiking Backpack', category: 'Bags', price: 36.0 },
    { id: 21, name: 'Long Frock', category: 'Clothing', price: 65.0 },
    { id: 22, name: 'Ear Rings', category: 'Accessories', price: 95.0 },
    { id: 23, name: 'Hiking Boots', category: 'Footwear', price: 45.0 },
    { id: 24, name: 'Raincoat', category: 'Clothing', price: 35.0 }
];

// Display products on the page
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) {
        console.error('Product container with id "product-list" is missing.');
        return;
    }
    productContainer.innerHTML = ''; // Clear existing products

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Populate the product dropdown based on the selected category
function updateProductDropdown() {
    const category = document.getElementById('product-category').value;
    const productDropdown = document.getElementById('product');

    if (!productDropdown) {
        console.error('Product dropdown with id "product" is missing.');
        return;
    }

    // Reset dropdown options
    productDropdown.innerHTML = '<option value="" disabled selected>Select a product</option>';

    if (category) {
        // Filter products by category
        const filteredProducts = products.filter(product => product.category === category);
        console.log('Filtered products:', filteredProducts);

        // Populate the dropdown
        filteredProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productDropdown.appendChild(option);
        });

        // Display filtered products
        displayProducts(filteredProducts);
    } else {
        console.log('No category selected');
    }
}

// Handle form submission
document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const productCategory = document.getElementById('product-category').value;
    const productId = document.getElementById('product').value;
    const product = products.find(p => p.id == productId);

    if (name && email && phone && productCategory && product) {
        const message = `
            Order placed successfully! 
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
        `;

        // Display message on the page
        const messageContainer = document.getElementById('message');
        if (messageContainer) {
            messageContainer.textContent = message;
            messageContainer.style.display = 'block';
        } else {
            console.error('Message container with id "message" is missing.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});

// Populate the product dropdown when the category changes
document.getElementById('product-category').addEventListener('change', updateProductDropdown);

// Initial display of all products
window.onload = function () {
    console.log('Displaying all products initially');
    displayProducts(products);
};