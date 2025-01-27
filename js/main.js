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
