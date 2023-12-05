document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://api.noroff.dev/api/v1/rainy-days';
    const loadingIndicator = document.getElementById('loading-indicator');
    const mensJacketsContainer = document.querySelector('.body-items .row');
  
    // Fetch data for men's jackets
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/products/mens/jackets`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const products = await response.json();
        displayProducts(products);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        loadingIndicator.style.display = 'none';
      }
    };
  
    // Function to display products
    const displayProducts = (products) => {
      mensJacketsContainer.innerHTML = ''; // Clear existing content
  
      products.forEach((product) => {
        const item = document.createElement('div');
        item.classList.add('item');
  
        const buyNowDiv = document.createElement('div');
        buyNowDiv.classList.add('buy-now');
  
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy Now';
  
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
  
        const itemText = document.createElement('p');
        itemText.classList.add('item-text');
        itemText.textContent = product.title;
  
        itemCaption.appendChild(itemPrice);
        itemCaption.appendChild(itemText);
  
        item.appendChild(buyNowDiv);
        item.appendChild(productLink);
        item.appendChild(itemCaption);
  
        mensJacketsContainer.appendChild(item);
      });
    };
  
    // Call the fetchData function when the page loads
    fetchData();
  });
  