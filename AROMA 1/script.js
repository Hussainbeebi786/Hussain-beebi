// Handle contact form submission (username, email, password)
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store form data in localStorage
    localStorage.setItem('username', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Hide the contact form and show the image section
    document.getElementById('contact').style.display = 'none';
    document.getElementById('imageSection').style.display = 'block';
});

// Handle image form submission (upload and preview image)
document.getElementById('imageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById('imageUrl').value.trim();

    // Validate the image URL
    if (isValidImageUrl(imageUrl)) {
        const postContainer = document.getElementById('imagePreview');
        const post = document.createElement('div');
        post.classList.add('post');

        // Create an image element
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'User Post';
        img.style.maxWidth = '100%'; // Ensure responsive image
        img.style.height = 'auto'; // Maintain aspect ratio

        // Create a remove button for the post
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete Post';
        removeButton.style.marginTop = '10px';
        removeButton.addEventListener('click', function () {
            removePost(post); // Remove the post from the DOM
        });

        // Append image and remove button to the post
        post.appendChild(img);
        post.appendChild(removeButton);

        // Append the post to the container
        postContainer.appendChild(post);

        // Reset the image URL input field
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Please enter a valid image URL.');
    }
});

// Validate the URL to check if it ends with a valid image extension
function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
}

// Function to remove a specific post
function removePost(postElement) {
    postElement.remove();
}
