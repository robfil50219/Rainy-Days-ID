document.addEventListener('DOMContentLoaded', async () => {
    async function getProductData(productId) {
        const productDetailURL = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;
        const response = await fetch(productDetailURL);
        const productData = await response.json();
        return productData;
    }

    const addToFavoritesButton = document.getElementById('add-to-favorites');
    const removeFromFavoritesButton = document.getElementById('remove-from-favorites');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Get existing favorites from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the product is in favorites
    const isAlreadyInFavorites = favorites.some(favorite => favorite.id === productId);

    // Show/hide buttons based on whether the product is in favorites
    if (isAlreadyInFavorites) {
        addToFavoritesButton.style.display = 'none';
        removeFromFavoritesButton.style.display = 'block';
    } else {
        addToFavoritesButton.style.display = 'block';
        removeFromFavoritesButton.style.display = 'none';
    }

    addToFavoritesButton.addEventListener('click', addToFavorites);
    removeFromFavoritesButton.addEventListener('click', removeFromFavorites);

    async function addToFavorites() {
        // Rest of your addToFavorites function...
    }

    function removeFromFavorites() {
        // Rest of your removeFromFavorites function...
    }
});





