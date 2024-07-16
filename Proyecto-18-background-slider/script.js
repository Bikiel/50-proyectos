

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}



// const body = document.body
// const sildes = document.querySelectorAll('.slide')
// const leftBtn = document.querySelectorAll('left')
// const rightBtn = document.querySelectorAll('right')

// let ActiveSlide = 0

// rightBtn.addEventListener('click', () =>{
//     ActiveSlide++

//     if(ActiveSlide > sildes.length - 1){
// ActiveSlide = 0
//     }

//     setBgToBody()
//     setActiveSlide()
// })


// leftBtn.addEventListener('click', () =>{
//     ActiveSlide--

//     if(ActiveSlide < 0 ){
// ActiveSlide = sildes.length -1
//     }

//     setBgToBody()
//     setActiveSlide()
    
// })

// setBgToBody()

// function setBgToBody(){
//     body.style.backgroundImage = sildes[ActiveSlide].style.backgroundImage
// } 

// function setActiveSlide() {
//     slides.forEach((slide) => slide.classList.remove('active'))
  
//     slides[activeSlide].classList.add('active')
//   }

// sildes[ActiveSlide].classList.add('active')
