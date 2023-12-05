import { addItemToCart, getCartItems } from '/cart';

document.addEventListener('DOMContentLoaded', () => {
  const apiURL = 'https://api.noroff.dev/api/v1/rainy-days';
  const loadingIndicator = document.getElementById('loading-indicator');
  const productContainer = document.querySelector('.body-items .row');
  const cartSummaryContainer = document.querySelector('.cart-summary');
  let products = []; 

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        products = await response.json(); 
        displayProducts(products); 
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        loadingIndicator.style.display = 'none'; // Hide the loading indicator when the data is loaded
      }
    };

  // Function to display products
  const displayProducts = (products) => {
    products.forEach((product) => {
      const item = document.createElement('div');
      item.classList.add('item');

      const buyNowDiv = document.createElement('div');
      buyNowDiv.classList.add('buy-now');

      const buyButton = document.createElement('button');
      buyButton.classList.add('buy-button');
      buyButton.textContent = 'Buy Now';
      buyButton.addEventListener('click', () => addItemToCart(product.id)); // Add item to cart on button click
      buyNowDiv.appendChild(buyButton);

      const productLink = document.createElement('a');
      productLink.href = `product_page.html?id=${product.id}`;

      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.title;
      productLink.appendChild(productImage);

      const itemCaption = document.createElement('div');
      itemCaption.classList.add('item-caption');

      const itemPrice = document.createElement('p');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = `$${product.price}`;
      itemCaption.appendChild(itemPrice);

      const itemText = document.createElement('p');
      itemText.classList.add('item-text');
      itemText.textContent = product.title;
      itemCaption.appendChild(itemText);

      item.appendChild(buyNowDiv);
      item.appendChild(productLink);
      item.appendChild(itemCaption);

      productContainer.appendChild(item);
    });
  };

  // Function to render cart summary
  const renderCartSummary = () => {
    cartSummaryContainer.innerHTML = '';
    const cartItems = getCartItems();

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);

      if (product) {
        totalItems += cartItem.quantity;
        totalPrice += product.price * cartItem.quantity;
      }
    });

    const totalItemsParagraph = document.createElement('p');
    totalItemsParagraph.textContent = `Total Items: ${totalItems}`;

    const totalPriceParagraph = document.createElement('p');
    totalPriceParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    const checkoutButton = document.createElement('a');
    checkoutButton.href = 'checkout.html';
    checkoutButton.classList.add('checkout-button');
    checkoutButton.textContent = 'Checkout';

    cartSummaryContainer.appendChild(totalItemsParagraph);
    cartSummaryContainer.appendChild(totalPriceParagraph);
    cartSummaryContainer.appendChild(checkoutButton);
  };

  // Call the fetchData function when the page loads
  fetchData();

  // Render cart summary on page load
  renderCartSummary();
});