function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(arr, obj, num) { 
  const existingProduct = arr.find(it=> it.id === obj.id);
  const currentQuantity = existingProduct?.quantity ?? 0;
  const newQuantity = currentQuantity + num;

if (num <= 0 || newQuantity > obj.stock) {
  throw new RangeError();
}
    if(existingProduct){
     return arr.map(it => {
  if (it.id === obj.id) {
    return { ...it, quantity: it.quantity + num };
  }

  return it;
})
    }else{
      let newObj = {...obj, quantity: num}
     return [...arr, newObj]
    }
}
function changeQuantity(cart, id, num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new RangeError();
  }

  const existingProduct = cart.find(it => it.id === id);

  if (!existingProduct) {
    return cart;
  }

  if (num > existingProduct.stock) {
    throw new RangeError();
  }

  return cart.map(it => {
    if (it.id === id) {
      return { ...it, quantity: num };
    }

    return it;
  });
}
function removeFromCart(cart, id) {
 const existingProduct = cart.find(it=> it.id === id);
 if(!existingProduct) return cart;
 return cart.filter(it=>it.id !== id);
}
function calculateCartSubtotal(cart) {
  if(cart.length === 0) return 0;
  return cart.reduce((accum, item)=>{
    return accum+= item.quantity * item.price
  },0)
}
function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);

  let delivery = 30000;
  let discount = 0;

  if (subtotal >= 50000) {
    delivery = 0;
  }

  if (promo === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }

  const total = subtotal + delivery - discount;

  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
