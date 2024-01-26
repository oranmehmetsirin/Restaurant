const searcfForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");

const cartItem = document.querySelector(".cart-items-container");

const cartBtn = document.querySelector("#cart-btn");

const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click", function (){
    searcfForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath() .includes(searchBtn) && 
            !e.composedPath() .includes(searcfForm)
            ){
            searcfForm.classList.remove("active");
        }
    });
})

cartBtn.addEventListener("click", function (){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath() .includes(cartBtn) && 
            !e.composedPath() .includes(cartItem)
            ){
            cartItem.classList.remove("active");
        }
    });
})

menuBtn.addEventListener("click", function (){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath() .includes(menuBtn) && 
            !e.composedPath() .includes(navbar)
            ){
            navbar.classList.remove("active");
        }
    });
})