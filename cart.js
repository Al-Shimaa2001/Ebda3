export let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
document.addEventListener("DOMContentLoaded", () => {
  let cartHtml = "";
  cart.forEach((ele, i) => {
    cartHtml += `<div class="card cardDevices js-cart-item-${ele.id}">
                <img src="${ele.img}" alt="electronics" class='eleImg' />
                <p class='eleTitle'>${ele.title}</p>
                <div class="details">${ele.description}</div>
                <p class='salary'>${ele.price}</p>
                <div class='hide delete-from-cart' data-product-id=${ele.id}>
                 <span class="ion--bag-outline"></span>
                 <span>احذف من السله</span>
                 </div>
                </div>`;
    document.querySelector(".cartsItems").innerHTML = cartHtml;
  });
  document.querySelectorAll(".delete-from-cart").forEach((deleteCartItem) => {
    deleteCartItem.addEventListener("click", () => {
      let itemId = deleteCartItem.dataset.productId;
      deleteItemFromCart(itemId);
      let container = document.querySelector(`.js-cart-item-${itemId}`);
      container.remove();
    });
  });
});
function deleteItemFromCart(productId) {
  let newCart = [];
  cart.forEach((cardItem) => {
    if (cardItem.id !== productId) {
      newCart.push(cardItem);
    }
  });

  cart = newCart;
  saveToLocalStorage();
  updateQuantity(quantity - 1);
}
export function saveToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}
let quantity = JSON.parse(localStorage.getItem("quantity")) || 0;
export function calculateQuantity() {
  quantity += 1;
  updateQuantity();
  saveQuantityInStorage();
}
export function updateQuantity() {
  document.querySelectorAll(".showItems").forEach((quantityValue) => {
    quantityValue.innerHTML = quantity;
  });
}
// save to local storage

export function saveQuantityInStorage() {
  localStorage.setItem("quantity", JSON.stringify(quantity));
}
