const slides = document.querySelectorAll(".phone");
let currentslide = 0;

function showSlide() {
    // Remove the "active" class from all slides first
    slides.forEach((phone) => {
        phone.classList.remove("active");
    });

    // Add the "active" class to the current slide
    slides[currentslide].classList.add("active");

    // Move to the next slide in the array
    currentslide = (currentslide + 1) % slides.length;
}

// Set the interval to show the slides every 3 seconds
setInterval(showSlide, 3000);


let mobilelist = document.querySelector(".dibba");
let earlist = document.querySelector(".Dibba")
let tabletlist = document.querySelector(".Dibba3")

function showmobilelist(){
  mobilelist.classList.toggle("show")
}

function showearlist(){
  earlist.classList.toggle("show")
}

function showTablet(){
  tabletlist.classList.toggle("show")
}
