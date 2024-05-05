const slides = document.querySelectorAll('.slider-item')
const dots = document.querySelectorAll('.slider-dots .slider-dot')
let slideIndex = 0
let intervalId = null


document.addEventListener('DOMContentLoaded', initalizeSlider)

function initalizeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add('display-slide')
        intervalId = setInterval(nextSlide, 5000)
    }
}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0
    }else if(index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.classList.remove('display-slide')
    })
    slides[slideIndex].classList.add('display-slide')

    document.querySelector('.slider-dots .slider-dot.active').classList.remove('active')
    dots[slideIndex].classList.add('active')
}


function prevSlide() {
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
}

function dotSlide(dotNumber) {
    showSlide(slideIndex = dotNumber - 1)
}