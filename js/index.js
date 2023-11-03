const apiURL = 'https://api.noroff.dev/api/v1/rainy-days';

// Fetch data from the API

const fetchData = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Code to handle the data goes here

    displayProducts(data); //Call the function to display products 
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

//Function to display products 

const displayProducts = (products) => {
  const productContainer =document.querySelector('.body-items .row'); 

  productContainer.forEach(product) => {
    const item = document.createElement('div'); 
    item.classList.add('item');

    const buyNowDiv = document.createElement('div'); 
    buyNowDiv.classList.add('buy-now');

    const buyButton = document.createElement ('button'); 
    buyButton.classList.add('buy-button'); 
    buyButton.textContent = 'Buy Now'; 
    buyNowDiv.appendChild(buyButton); 

    const productLink = document.createElement('a')


  } 
}

// Call the fetchData function when the page loads 

fetchData();