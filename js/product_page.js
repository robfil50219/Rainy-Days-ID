const getproductData = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const productId = url.get('id'); 
    const productDetailURL = `https://api.noroff.dev/api/v1/rainy-days/${productId}`; 

    try {
        const response = await fetch(productDetailURL)
        if (!response.ok) {
            throw new Error ('Network response was not ok'); 
        }
    }
}