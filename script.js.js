// script.js

// Array para armazenar os produtos no carrinho
let cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

// Função para atualizar o carrinho na tela
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = cart.length;
    cartItems.innerHTML = `<p>Itens no carrinho: ${cartCount}</p>`;

    // Exibe o botão de finalizar compra caso haja itens no carrinho
    if (cartCount > 0) {
        cartItems.innerHTML += '<button id="checkout-btn">Finalizar Compra</button>';
    }
}

// Adicionar evento de click aos botões de adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        addToCart(product, price);
    });
});
