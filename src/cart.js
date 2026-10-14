function addToCart(storage, product, qnt) {
  if (qnt === 0 || qnt > product.stock) {
    throw RangeError();
  }
  const cart = [...storage];
  const isInCart = cart.find((item) => item.id === product.id);
  if (isInCart) {
    return cart.map((item) => {
      if (item.id === product.id) {
        item.quantity += qnt;
      }
      return item;
    });
  }
  cart.push({ ...product, quantity: qnt });
  return cart;
}

function changeQuantity(storage, id, qnt) {
  const cart = [...storage];
  const isInCart = cart.find((item) => item.id === id);
  if (isInCart) {
    if (qnt === 0 || qnt > isInCart.stock) {
      throw RangeError();
    }
    return cart.map((item) => {
      if (item.id === id) {
        item.quantity = qnt;
      }
      return item;
    });
  }
  return storage;
}

function removeFromCart(storage, id) {
  const cart = [...storage];
  const isInCart = cart.find((item) => item.id === id);
  if (isInCart) {
    return cart.filter((item) => item.id !== id);
  }
  return storage;
}

function calculateCartSubtotal(storage) {
  let total = 0;
  if (storage.length > 0) {
    storage.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
  return total;
}

function calculateOrderTotal(storage, promo) {
  const subtotal = calculateCartSubtotal(storage);
  const delivery = subtotal < 50000 ? 30000 : 0;
  let discount = 0;
  if (promo === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }
  const total  = subtotal + delivery - discount;
  return {subtotal, discount, delivery, total};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;