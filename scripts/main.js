import { devices } from "../data/cart.js";
import { cart, saveToLocalStorage, calculateQuantity } from "./cart.js";
let list_icon = document.querySelector(".list_icon");
let mobileNav = document.querySelector(".mobile");

// open & closing list of nav
list_icon.onclick = function () {
  list_icon.style.cursor = "pointer";
  mobileNav.classList.add("mobile_add");
};
document.querySelector(".close_list").addEventListener("click", function () {
  mobileNav.classList.remove("mobile_add");
});
// scroll to shopping section
document.querySelector("#shopping_now").addEventListener("click", function () {
  document
    .querySelector("#shopping")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

//  list of shopping options
const shopping = {
  electronic: {
    img: "./images/اجهزه الكترونيه.png",
    alt: "electronic devices",
    description: "اجهزه الكترونيه",
  },
  headphones: {
    img: "./images/السماعات.png",
    alt: "headphones",
    description: "السماعات",
  },
  battery: {
    img: "./images/الشواحن.png",
    alt: "battery",
    description: " الشواحن والبطاريات",
  },
};
//  shopping
const container = document.querySelector(".departments");
Object.values(shopping).forEach((items) => {
  //   create card
  const card = document.createElement("div");
  card.className = "card";
  // images
  const image = document.createElement("img");
  image.src = items.img;
  image.alt = items.alt;
  image.loading = "lazy";
  image.className = "images";
  // description
  const Title = document.createElement("p");
  Title.innerHTML = items.description;
  Title.className = "title";

  container.appendChild(card);
  card.appendChild(image);
  card.appendChild(Title);
});
document.querySelectorAll(".card").forEach((card, i) => {
  card.addEventListener("click", function () {
    if (i == 0) {
      document
        .querySelector("#electronics")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (i == 1) {
      console.log("its second");
    } else {
      console.log("end");
    }
  });
});

// electronic devices cart

let containerCard = "";
devices.forEach((ele) => {
  let showElement = `
        <div class="card cardDevices">
        <img src="${ele.img}" alt="electronics" class='eleImg' />
        <p class='eleTitle'>${ele.title}</p>
        <div class="details">${ele.description}</div>
        <p class='salary'>${ele.price}</p>
        <div class='hide' data-product-id=${ele.id}>
        <span class="ion--bag-outline"></span>
        <span>اضف للسله</span>
        </div>
        </div>`;
  containerCard += showElement;
  document.querySelector(".cards").innerHTML = containerCard;
});

document.querySelectorAll(".hide").forEach((addToCart, i) => {
  addToCart.addEventListener("click", () => {
    let productId = addToCart.dataset.productId;
    let matchingItem;
    devices.forEach((items) => {
      if (productId === items.id) {
        matchingItem = items;
      }
    });
    cart.push(matchingItem);
    if (cart) {
      calculateQuantity();
    }
    saveToLocalStorage();
    popupAlert();
  });
});

function popupAlert() {
  // Show popup
  const popup = document.querySelector(".cart-popup");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// footer button scroll to top
const scrollToTop = document.querySelector(".return_top");
scrollToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let date = new Date();
document.querySelector(
  ".date"
).innerHTML = ` الحقوق محفوظه | TEQZON ${date.getFullYear()}
     `;
