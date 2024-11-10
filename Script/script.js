let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideInterval = 4000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
}

function autoSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Open image in a new tab to zoom in
function openInNewTab(src) {
    window.open(src, "_blank").focus();
}

// Initialize slideshow and set up autoslide interval
showSlide(currentSlideIndex);
setInterval(autoSlide, slideInterval);

// Manual navigation
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));
