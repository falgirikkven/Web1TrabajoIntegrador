const SLIDES = document.getElementsByClassName("carousel-slide");
const DOTS = [];

let slideIndex;

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function showSlide(n) {
    if (n >= SLIDES.length) {
        n = 0;
    } else if (n < 0) {
        n = SLIDES.length - 1;
    }
    SLIDES[slideIndex].classList.add("hide");
    DOTS[slideIndex].classList.remove("carousel-active");
    slideIndex = n;
    SLIDES[slideIndex].classList.remove("hide");
    DOTS[slideIndex].classList.add("carousel-active");
}

function init() {
    const dotContainer = document.querySelector(".carousel-dots");
    const navPrev = document.querySelector(".carousel-nav-left");
    const navNext = document.querySelector(".carousel-nav-right");

    for (let i = 0; i < SLIDES.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("carousel-dot");
        dot.addEventListener("click", () => showSlide(i));
        dotContainer.appendChild(dot);
        DOTS.push(dot);

        SLIDES[i].classList.add("hide");
    }

    navPrev.addEventListener("click", prevSlide);
    navNext.addEventListener("click", nextSlide);

    slideIndex = 0;
    showSlide(0);
}

init();
