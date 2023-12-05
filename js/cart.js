// Array to store cart items
let cartItems = [];

// Function to add an item to the cart
export const addItemToCart = (productId) => {
  const cartItem = cartItems.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cartItems.push({ id: productId, quantity: 1 });
  }

  // Trigger a custom event when an item is added to the cart
  const event = new CustomEvent('cartUpdated', { detail: cartItems });
  document.dispatchEvent(event);
};

// Function to remove an item from the cart
export const removeItemFromCart = (productId) => {
  cartItems = cartItems.filter((item) => item.id !== productId);

  // Trigger a custom event when an item is removed from the cart
  const event = new CustomEvent('cartUpdated', { detail: cartItems });
  document.dispatchEvent(event);
};

// Function to get the current cart items
export const getCartItems = () => {
  return cartItems;
};
