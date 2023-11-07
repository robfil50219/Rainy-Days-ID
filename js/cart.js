document.addEventListener('DOMContentLoaded'),() => {
    const quantityInputs = document.querySelectorAll('.quantity-input'); 
    const totalPriceElement = document.quareySelector('.total-price'); 
    const itemPrices = document.quareySelectorAll('.item-price'); 

    //function to update price based on quantity

    const updateTotalPrice = () => {
        let totalPrice = 0; 
        itemPrices.forEach((itemPrice, index) => {
            totalPrice += parseFloat(itemPrice.textContent.replace('$', '')) * parseInt(quantityInputs[index].value);
        });
        totalPriceElemnt.textcontent = `$${totalPrice.toFixed(2)}`; 
    };

    //Add event listner to each quantity input
}