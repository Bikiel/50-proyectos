const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;  // Inicialmente mostramos el primer slide

// Ajustamos la posición inicial del slide izquierdo para mostrar el primer slide arriba
slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex ++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
 // Ajustamos la posición de los slides derecho e izquierdo al cambiar de slide
 slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
 slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}