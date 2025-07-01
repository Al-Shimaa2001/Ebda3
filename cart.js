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
      popupAlert()
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
  updateQuantity(quantity - 1);
  saveToLocalStorage();
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
export function updateQuantity(quantity) {
  document.querySelectorAll(".showItems").forEach((quantityValue) => {
    quantityValue.innerHTML = quantity;
  });
}
// save to local storage

export function saveQuantityInStorage() {
  localStorage.setItem("quantity", JSON.stringify(quantity));
}

function popupAlert() {
  // Show popup
  const popup = document.querySelector(".cart-popup");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}
// let myPromise = new Promise ((result, reject)=>{
//   if(!cart){
//     result(console.log('it success'))

//   }else{

//     reject(console.log('it failed'))
//   }
// })
// myPromise.then((result)=>{
//   result= cart
//   console.log(result)
// })
// .catch((reject)=>{
// console.log(Error( 'it rejected' + ' '+ reject))
// })