  const getProductData = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const productDetailURL = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;
      
        try {
          const response = await fetch(productDetailURL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const productData = await response.json();
      
          displayProductDetails(productData); // Call the function to display the data
        } catch (error) {
          console.error('Error fetching product data', error);
        }
      };
      
      const displayProductDetails = (product) => {
        const productTitle = document.querySelector('h1');
        const productImage = document.querySelector('.product-image img');
        const productPrice = document.querySelector('.item-price');
        
        console.log(productImage);

        productTitle.textContent = product.title;
        productImage.src = product.image;
        productPrice.textContent = `$${product.price}`;
      };
      
      getProductData(); // Call the getProductData function when the page loads
      
    
 
  

