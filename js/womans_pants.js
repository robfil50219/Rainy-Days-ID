document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://api.noroff.dev/api/v1/rainy-days';
    const loadingIndicator = document.getElementById('loading-indicator');
    const womanPantsProductsContainer = document.getElementById('pants-items-container');

    // Fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            displayWomanPants(data);
        } catch (error) {
            console.error('Error fetching data', error);
        } finally {
            loadingIndicator.style.display = 'none';
        }
    };

    // Function to display woman's pants
    const displayWomanPants = (products) => {
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
            itemCaption.appendChild(itemPrice);

            const itemText = document.createElement('p');
            itemText.classList.add('item-text');
            itemText.textContent = product.title;
            itemCaption.appendChild(itemText);

            item.appendChild(buyNowDiv);
            item.appendChild(productLink);
            item.appendChild(itemCaption);

            womanPantsProductsContainer.appendChild(item);
        });
    };

    // Call the fetchData function when the page loads
    fetchData();
});
