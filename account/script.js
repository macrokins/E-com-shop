
// -----Hamburger----

const navSlide = () => {
  const hamburger = document.querySelector (".hamburger");
  const navbar = document.querySelector (".nav-bar");
  const navLinks = document.querySelectorAll (".nav-bar hbg-link");

  hamburger.onclick = () => {
    navbar.classList.toggle ("nav-active");

     //Animation links
     navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style,animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
     }); 

     //hamburger animation
     hamburger.classList.toggle("toggle");
  };
};
window.onload = () => navSlide();