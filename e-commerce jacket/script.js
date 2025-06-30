function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count')?.innerText = cart.length;
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let container = document.getElementById('cart-items');
  let total = 0;
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  cart.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `<strong>${item.name}</strong> - $${item.price}`;
    container.appendChild(div);
    total += item.price;
  });
  let totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
  container.appendChild(totalDiv);
}

updateCartCount();
if (document.getElementById('cart-items')) {
  loadCart();
}
