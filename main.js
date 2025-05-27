let list_icon = document.querySelector('.list_icon')
let mobileNav = document.querySelector('.mobile')
list_icon.onclick=function(){
    console.log('hi')
    list_icon.style.cursor='pointer'
        mobileNav.classList.toggle('mobile_add')

    
}
