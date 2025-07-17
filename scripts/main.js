import { devices } from "../data/cart.js";
import { headphones } from "../data/headphones.js";
import { battery } from "../data/battery.js";
import { clients } from "../data/clientsOpinion.js";

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
      document.querySelector("#headphone").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.querySelector("#battery").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

let containerCard = "";
devices.map((ele) => {
  let showElement = `
        <div class="card cardDevices" 
        title="اضغط مرتين للاضافة الى المفضله">
        <img src="${ele.img}" alt="electronics" class='eleImg'
           />
        <p class='eleTitle'>${ele.title}</p>
        <div class="details">${ele.description}</div>
        <p class='salary'>${ele.price}</p>
        <div class='hide' data-product-id=${ele.id}>
        <span class="ion--bag-outline"></span>
        <span>اضف للسله</span>
        </div>
        </div>`;
  containerCard += showElement;
});
document.querySelector(".cards").innerHTML = containerCard;

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
// headphones
let headphoneSection = "";
headphones.forEach((ele) => {
  headphoneSection += ` <div class="card cardDevices" title="اضغط مرتين للاضافة الى المفضله">
        <img src="${ele.img}" alt="electronics" class='eleImg' />
 <p class='eleTitle'>${ele.title}</p>
        <div class="details">${ele.description}</div>
        <p class='salary'>${ele.price}</p>
        <button  class='headphoneAddToCart' data-headphone-id=${ele.id}>
        <span class="ion--bag-outline"></span>
        <span>اضف للسله</span>
        </button>
        </div>`;
});
document.querySelector(".headphoneCards").innerHTML = headphoneSection;
document.querySelectorAll(".headphoneAddToCart").forEach((addToCart) => {
  addToCart.addEventListener("click", () => {
    let headphone = addToCart.dataset.headphoneId;
    let matchingItem;
    headphones.forEach((items) => {
      if (headphone === items.id) {
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
// battery
let firstCardBattery = ` <div class="card">
<img src="./images/battry-intry.png" alt="battery section"  class="rounded-xl">
</div>`;
let batterySection = "";

battery.forEach((ele) => {
  batterySection += `
   <div class="card cardDevices" title="اضغط مرتين للاضافة الى المفضله" >
        <img src="${ele.img}" alt="electronics" class='eleImg' 
       />
        <p class='eleTitle'>${ele.title}</p>
        <div class="details">${ele.description}</div>
        <p class='salary'>${ele.price}</p>
        <button  class='batteryAddToCart' data-battery-id=${ele.id}>
        <span class="ion--bag-outline"></span>
        <span>اضف للسله</span>
        </button>
        </div>`;
});

document.querySelector(
  ".batteryCards"
).innerHTML = `${firstCardBattery}  ${batterySection}`;
document.querySelectorAll(".batteryAddToCart").forEach((addToCart) => {
  addToCart.addEventListener("click", () => {
    let batteryId = addToCart.dataset.batteryId;
    let matchingItem;
    battery.forEach((items) => {
      if (batteryId === items.id) {
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
//  add to favorite
document.querySelectorAll(".cardDevices").forEach((card) => {
  card.addEventListener("dblclick", function () {
    card.classList.toggle("active");
  });
});
// clients sections
let clientsOpinion = "";
clients.forEach((client) => {
  clientsOpinion += `  <div class='opinion'>
  <p class='text-[#003741] text-[20px]'>${client.title}</p>
  <div class="client-details">
  <div class="clients-profile  ">
  <img src="${client.profile}" alt="clients profile"/>
  </div>
         <div>
          <p class="text-[#001A1E] font-bold text-[24px]">${client.userName}</p>
          <span class='rating'>
          <img src="${client.rating}" alt="rating"/>
          </span>
         </div>
        </div>
      </div>`;
});
document.querySelector(".clients").innerHTML = clientsOpinion;
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
