function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

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

function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
