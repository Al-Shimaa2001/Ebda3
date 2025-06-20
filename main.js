import { devices } from "./data/cart.js";
let list_icon = document.querySelector(".list_icon");
let mobileNav = document.querySelector(".mobile");
//  on load will work
window.onload= function(){
shoppingOfDepartment();
displayDevices()
}

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
//  shopping
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
    image.loading='lazy'
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




function displayDevices(){
  let containerCard=''
  devices.forEach((ele)=>{
    
    let showElement=`
        <div class="card cardDevices">
        <img src="${ele.img}" alt="electronics" class='eleImg' />
        <p class='eleTitle'>${ele.title}</p>
        <div class="details">${ele.description}</div>
        <p class='salary'>${ele.price}</p>
        <div class='hide'>
        <span class="ion--bag-outline"></span>
        <span>اضف للسله</span>
        </div>
        </div>`
        containerCard+= showElement
       document.querySelector('.cards').innerHTML= containerCard 

      
       
  })
}




// const cards= document.querySelector('.cards')
// function eleDevices(){
//   Object.values(devices).forEach((items)=>{
//     // card 
//     let card =document.createElement('div')
//     card.className='cardDevices'
// // add image to card
// let image = document.createElement('img')
// image.src= items.img
// image.alt= items.img
// image.loading='lazy'
// // add title
// let title = document.createElement('h2')
// title.innerHTML = items.title
// title.className='title'


// // add to body
// cards.appendChild(card)
// card.appendChild(image)
// card.appendChild(title)
//   })
// }
