// Typing animation for introduction
const professions = ["a Graphic Designer", "a Videographer", "an Artist"];
let professionIndex = 0;
let charIndex = 0;
const typingIntro = document.getElementById("typing-intro");
const introText = "Hi, I'm Joshua "; // White text
const typingSpeed = 100; // Typing speed in ms

function typeProfession() {
    if (charIndex < professions[professionIndex].length) {
        typingIntro.innerHTML = `<span style="color: white;">${introText}</span><span class="highlight">${professions[professionIndex].substring(0, charIndex + 1)}</span>`;
        charIndex++;
        setTimeout(typeProfession, typingSpeed);
    } else {
        setTimeout(eraseProfession, 2000); // Pause before erasing
    }
}

function eraseProfession() {
    if (charIndex > 0) {
        typingIntro.innerHTML = `<span style="color: white;">${introText}</span><span class="highlight">${professions[professionIndex].substring(0, charIndex - 1)}</span>`;
        charIndex--;
        setTimeout(eraseProfession, typingSpeed);
    } else {
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(typeProfession, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function() {
    typeProfession();
});

let slideIndex = 0;
let autoSlideInterval;

// Function to show a specific slide
function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}

// Move to the next or previous slide
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide();
}

// Automatically move to the next slide
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    autoSlideInterval = setTimeout(autoSlide, 5000); // Change every 5 seconds
}

// Reset the automatic slide transition if the user interacts
function resetAutoSlide() {
    clearTimeout(autoSlideInterval);
    autoSlideInterval = setTimeout(autoSlide, 5000); // Resume after interaction
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    autoSlide();
});
