const navLotPar = document.querySelectorAll('.nav-lot-par')
const allLotsSwiper = document.querySelectorAll('.allLotsSwiper')
const empInfo = document.querySelectorAll('.emp-info.text-underline')
const swipText = document.querySelectorAll('.swip-text')
const menu = document.querySelector('.menu-click.menu-click-med')
const menuSm = document.querySelector('.menu-med.menu-click-sm')
const navMenu = document.querySelector('.nav-menu')
const bodyForMenu = document.querySelector('.bodyForM')
const menuAbrir = document.querySelector('.menu-abrir')
const menuFechar = document.querySelector('.menu-fechar')

// functions
const activeSwiperSec = (index) => {
    allLotsSwiper.forEach((swiper) =>{
        swiper.classList.add('d-none')
    })
    allLotsSwiper[index].classList.remove('d-none')
}
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