//Image Slider

const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
const slideWidth = slider.clientWidth;

function slide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(slide, 3000);



// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function nextSlide() {
  testimonialSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  testimonialSlides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);


