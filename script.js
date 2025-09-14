var typed = new Typed('.text', {
    strings : ['Frontend Devloper','Youtuber', 'Freelancer'],
    typespeed : 60,
    backspeed : 60,
    loop : true
}); 


// Toggle menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
