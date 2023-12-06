document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector('.cart-items');
    const quantityInputs = document.querySelectorAll('.quantity-input');
  
    quantityInputs.forEach(input => {
      input.addEventListener('change', updateCartItem);
    });
  
    function updateCartItem(event) {
      const input = event.target;
      const cartItem = input.closest('.cart-item');
      const priceElement = cartItem.querySelector('p');
      const quantity = input.value;
      const price = parseFloat(priceElement.textContent.replace('$', ''));
      const totalPrice = quantity * price;
      priceElement.textContent = `Price: $${totalPrice.toFixed(2)}`;
  
      updateCartSummary();
    }
  
    function updateCartSummary() {
      const cartItems = document.querySelectorAll('.cart-item');
      let totalItems = 0;
      let totalPrice = 0;
  
      cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));
        totalItems += quantity;
        totalPrice += quantity * price;
      });
  
      const totalItemsElement = document.querySelector('.cart-summary p:nth-child(1)');
      const totalPriceElement = document.querySelector('.cart-summary p:nth-child(2)');
  
      totalItemsElement.textContent = `Total Items: ${totalItems}`;
      totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }
  });
  