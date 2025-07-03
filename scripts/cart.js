export let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
let quantity = cart.length;
document.addEventListener("DOMContentLoaded", () => {
  updateQuantity();
  let cartHtml = "";
  cart.forEach((ele) => {
    cartHtml += `
     <div class="card cardDevices js-cart-item-${ele.id}">
                <img src="${ele.img}" alt="electronics" class='eleImg' />
                <p class='eleTitle'>${ele.title}</p>
                <article class="details">${ele.description}</article>
                <p class='salary'>${ele.price}</p>
                <div class='hide delete-from-cart' data-product-id=${ele.id}>
                 <span class="ion--bag-outline"></span>
                 <span>احذف من السله</span>
                 </div>
               </div>`;
              });
              document.querySelector(".cartsItems").innerHTML = cartHtml;

  document.querySelectorAll(".delete-from-cart").forEach((deleteCartItem) => {
    deleteCartItem.addEventListener("click", () => {
      let itemId = deleteCartItem.dataset.productId;
      deleteItemFromCart(itemId);
      let container = document.querySelector(`.js-cart-item-${itemId}`);
      container.remove();
      popupAlert();
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
  updateQuantity();
}
export function saveToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}
export function calculateQuantity() {
  quantity = cart.length;
  updateQuantity();
}
export function updateQuantity() {
  document.querySelectorAll(".showItems").forEach((quantityValue) => {
    quantityValue.innerHTML = quantity;
  });
}

function popupAlert() {
  // Show popup
  if(cart){

    const popup = document.querySelector(".cart-popup");
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}
