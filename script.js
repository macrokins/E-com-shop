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


// ----Body section-1 image slideshow-----
let slideIndex = 0;
showSlides ();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++; 
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
  
}