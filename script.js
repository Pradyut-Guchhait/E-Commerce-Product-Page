function addToCart() {
    // Get the element with the ID 'cart-count' which displays the current cart count
    const cartCount = document.getElementById('cart-count');
    
    // Convert the text content of the cart count element to an integer
    let count = parseInt(cartCount.textContent);
    
    // Increment the count by 1 and update the text content of the cart count element
    cartCount.textContent = ++count;
    
    // Add the 'pop' class to trigger the pop animation on the cart count
    cartCount.classList.add('pop');
    
    // Remove the 'pop' class after 300 milliseconds to reset the animation
    setTimeout(() => cartCount.classList.remove('pop'), 300);
}

