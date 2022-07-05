const menuBtn =
document.querySelector(".menu-btn");

const menu =
document.querySelector(".menu");

const menuNav =
document.querySelector(".navbar-nav");

const navItems =
document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); //toggle menu means opposite

function toggleMenu() {
if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) =>
        item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
} else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) =>
        item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
}
}

// Scroll Animation
window.addEventListener('scroll',reveal);
function reveal(){
  var reveals=document.querySelectorAll('.reveal');
  for(var i=0;i<reveals.length;i++){
    var windowHeight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealPoint=150;

    if(revealtop < windowHeight - revealPoint)
      reveals[i].classList.add('active');
    else
      reveals[i].classList.remove('active');  
  }
}


// contact page
