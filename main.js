let list_icon = document.querySelector(".list_icon");
let mobileNav = document.querySelector(".mobile");
list_icon.onclick = function () {
  console.log("hi");
  list_icon.style.cursor = "pointer";
  mobileNav.classList.toggle("mobile_add");
};
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

function shoppingOfDepartment() {
  const container = document.querySelector(".departments");
  Object.values(shopping).forEach((items) => {
    //   create card
    const card = document.createElement("div");
    card.className = "card";
    // images
    const image = document.createElement("img");
    image.src = items.img;
    image.alt = items.alt;
    image.className = 'images'
    // description
    const Title = document.createElement("p");
    Title.innerHTML = items.description;
    Title.className='title'

    container.appendChild(card);
    card.appendChild(image);
    card.appendChild(Title);
  });
}
shoppingOfDepartment();
