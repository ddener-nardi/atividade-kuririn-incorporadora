const navLotPar = document.querySelectorAll('.nav-lot-par')
const allLotsSwiper = document.querySelectorAll('.allLotsSwiper')
const empInfo = document.querySelectorAll('.emp-info.text-underline')
const swipText = document.querySelectorAll('.swip-text')
const menu = document.querySelector('.menu-click.menu-click-med')
const menuSm = document.querySelector('.menu-click.menu-click-sm')
const navMenu = document.querySelector('.nav-menu')
const bodyForMenu = document.querySelector('.bodyForM')
const menuAbrir = document.querySelector('.menu-abrir')
const menuFechar = document.querySelector('.menu-fechar')

const firstSecImages = document.querySelectorAll('.front-section-images .f-section-img')
const firstSecDots = document.querySelectorAll('.vertical-dots .dot')
const prevBtn = document.querySelector('#vertical-prev')
const nextBtn =  document.querySelector('#vertical-next')
const frontLeadPs = document.querySelectorAll('.front-lead-ps')

const acceptBtn = document.querySelector('#accept-cookie-btn')
const cookie = document.querySelector('.cookies')

// functions
const activeSwiperSec = (index) => {
    allLotsSwiper.forEach((swiper) =>{
        swiper.classList.add('d-none')
    })
    allLotsSwiper[index].classList.remove('d-none')
}

const changeImg = (step) => {
    let oldActiveImg = document.querySelector('.front-section-images .f-section-img.active')
    let oldActiveDot = document.querySelector('.vertical-dots .dot.active')
    let oldActiveLead = document.querySelector('.front-lead-ps.show')

    firstSecImages[step].classList.add('active')
    firstSecDots[step].classList.add('active')
    frontLeadPs[step].classList.add('show')

    oldActiveImg.classList.remove('active')
    oldActiveDot.classList.remove('active')
    oldActiveLead.classList.remove('show')
}

let activeStep = 0
const count = firstSecImages.length
nextBtn.addEventListener('click', function(){
    activeStep += 1
    if(activeStep >= count){
        activeStep = 0
    }
    changeImg(activeStep)
})
prevBtn.addEventListener('click', function(){
    activeStep -= 1
    if(activeStep < 0){
        activeStep = count - 1
    }
    changeImg(activeStep)
})
firstSecDots.forEach((dot, index) => {
    dot.addEventListener('click', function(){
        changeImg(index)
        activeStep = index
    })
})
// auto run
let refreshImg = setInterval(() =>{
    nextBtn.click();
}, 3000)
// events
menu.addEventListener('click', function(){
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
    bodyForMenu.classList.toggle('overflow-hidden')
    menuAbrir.classList.toggle('d-none')
    menuFechar.classList.toggle('d-none')
    
})
menuSm.addEventListener('click', function(){
    menuSm.classList.toggle('active')
    navMenu.classList.toggle('active')
    bodyForMenu.classList.toggle('overflow-hidden')
    menuAbrir.classList.toggle('d-none')
    menuFechar.classList.toggle('d-none')
    
})

let oldActivePar = document.querySelector('.nav-lot-par.active')
navLotPar.forEach((lotPar, index) => {
    lotPar.addEventListener('click', function(){
        oldActivePar.classList.remove('active')
        lotPar.classList.add('active')
        oldActivePar = lotPar
        activeSwiperSec(index)
    })
})

empInfo.forEach((info, index) =>{
    info.addEventListener('click', function(){
        if(index % 2 == 0){
            location.href = 'loteamento.html'
        } else{
            location.href = 'error.html'
        }
    })
})

swipText.forEach((text) =>{
    text.addEventListener('click', function(){
        location.href = 'page-blog.html'
    })
})

acceptBtn.addEventListener('click', function(){
    cookie.classList.add('hide')
})