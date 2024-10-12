function addToCart() {
    const cartCount = document.getElementById('cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = ++count;
    cartCount.classList.add('pop');
    setTimeout(() => cartCount.classList.remove('pop'), 300);
}
