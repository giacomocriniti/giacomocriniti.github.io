let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";  // Show the menu
        burgerBtn.style.backgroundPosition = "center left 50px, center";  // Change the burger button style
        isBurgerOpen = true;
    } else {
        burgerMenu.style.display = "none";  // Hide the menu
        burgerBtn.style.backgroundPosition = "center, center left 50px";  // Reset the button style
        isBurgerOpen = false;
    }
}

const header = document.querySelector(".header-main");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        if (!isBurgerOpen) {
            header.classList.add("nav--hidden");
        } else {
            header.classList.remove("nav--hidden");
        }
    } else {
        header.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});

// reverse order for publications
var lists = document.querySelectorAll('.rev-ord');

lists.forEach(function(list) {
    var liiList = list.getElementsByClassName("lii");
    var npubl = liiList.length;


    for (let i = 0; i < liiList.length; i++) {
        liiList[i].setAttribute('data-counter', npubl - i); 
    }
});
