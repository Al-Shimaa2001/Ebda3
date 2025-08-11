export let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
let quantity = cart.length;
let quantityNumber = localStorage.getItem("quantityNumber");
quantityNumber = quantity;
let itemsNumber;
// load
document.addEventListener("DOMContentLoaded", () => {
  itemsNumber = document.querySelector("#itemsNumber");
  updateQuantity();
  let cartHtml = "";
  cart.forEach((ele) => {
    cartHtml += `
     <section class="cartDevices cardDevice flex js-cart-item-${ele.id} "  data-element-id="${ele.id}">
              <section class="cartItems">
                <img src="${ele.img}" alt="electronics" class='electronicsImage' loading="lazy" />
                <div class='itemAddDetails'>
                <p class='eleTitle'>${ele.description}</p>    
                <p class='salary'>${ele.price}ر.س</p>
                <hr>
                <div class="flex justify-between items-center">
                  <span class="text-[#B0C7CB] text-20px">المجموع</span>
                <p class='salary totalPrice m-2' data-unit-price="${ele.price}">${ele.price}ر.س </p>
               <div class='delete-from-cart m-2' data-product-id=${ele.id}>
                <span>احذف من السله</span>
                 </div>
                </div>   
                </section>
               <div class="incOrDec">
                <button class='increase'>+</button>
                <span class="quantityNumber">1</span>
                 <button class="dec">-</button>
                </div>
                  </div>  
                  </section>`;
  });
  let containerCartItems = document.querySelector(".cartsItems");
  if (containerCartItems) {
    containerCartItems.innerHTML =
      cartHtml || "<p class='salary'>السلة فارغة</p>";
  }
  setupQuantityButtons();

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
// delete
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
// save to storage
export function saveToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}
function saveQuantityNumber() {
  localStorage.setItem("quantityNumber", quantity);
}
// calculate quantity
export function calculateQuantity(quantity) {
  quantity = cart.length;
  updateQuantity();
}
// update quantity
export function updateQuantity() {
  document.querySelectorAll(".showItems").forEach((quantityValue) => {
    quantityValue.innerHTML = quantity;
  });
  if (itemsNumber) {
    itemsNumber.innerHTML = quantity;
  }
  saveQuantityNumber();
}

// increase and decrease button
function setupQuantityButtons() {
  // Handle increase buttons
  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", (e) => {
      const cartItem = e.target.closest(".cartDevices");
      const quantityElement = cartItem.querySelector(".quantityNumber");
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      quantity += 1;
      updateQuantity();
      calculateTotalPrice(quantityElement.textContent, cartItem);
    });
  });
  // Handle decrease buttons
  document.querySelectorAll(".dec").forEach((button) => {
    button.addEventListener("click", (e) => {
      const cartItem = e.target.closest(".cartDevices");
      const quantityElement = cartItem.querySelector(".quantityNumber");
      if (parseInt(quantityElement.textContent) > 1) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
        quantity -= 1;
        updateQuantity();
        calculateTotalPrice(quantityElement.textContent, cartItem);
      }
    });
  });
}

// total price
function calculateTotalPrice(quantityElement, cartItem) {
  let totalPriceElement = cartItem.querySelector(".totalPrice");
  let elePrice = parseInt(totalPriceElement.dataset.unitPrice);
  let totalPrice = parseInt((elePrice * quantityElement).toFixed(2));
  totalPriceElement.innerHTML = totalPrice + " " + "ر.س";
}
// alert
function popupAlert() {
  if (cart) {
    const popup = document.querySelector(".cart-popup");
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}
