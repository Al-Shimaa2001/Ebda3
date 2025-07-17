export let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
let quantity = cart.length;
let itemsNumber;
document.addEventListener("DOMContentLoaded", () => {
  itemsNumber = document.querySelector("#itemsNumber");
  updateQuantity();
  let cartHtml = "";
  cart.forEach((ele) => {
    cartHtml += `
     <div class="cardDevices cartItems js-cart-item-${ele.id}">
                <img src="${ele.img}" alt="electronics" class='eleImg electronicsImage' />
                <div class='itemAddDetails'>
                <p class='eleTitle'>${ele.title}</p>
                <article class="details">${ele.description}</article>
                <p class='salary'>${ele.price}</p>
                <div class="incOrDec">
                <button class='inc'>+</button>
                <span>1</span>
                 <button class="dec">-</button>
                </div>
                <div class=' delete-from-cart' data-product-id=${ele.id}>
                <span>احذف من السله</span>
                 </div>
                </div>
               </div>`;
  });

  let containerCartItems = document.querySelector(".cartsItems");
  if (containerCartItems) {
    containerCartItems.innerHTML = cartHtml;
  }

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
  if (itemsNumber) {
    itemsNumber.innerHTML = quantity;
  }
}

document.querySelectorAll(".inc").forEach((buttonIncrease) => {
  buttonIncrease.addEventListener("click", () => {
    console.log("hi");
  });
});

function popupAlert() {
  // Show popup
  if (cart) {
    const popup = document.querySelector(".cart-popup");
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}
