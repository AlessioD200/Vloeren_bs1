let slideIndex = 0;
autoShowSlides();
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}
function autoShowSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



