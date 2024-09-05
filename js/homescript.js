const navLotPar = document.querySelectorAll('.nav-lot-par')
const allLotsSwiper = document.querySelectorAll('.allLotsSwiper')
const empInfo = document.querySelectorAll('.emp-info.text-underline')
const swipText = document.querySelectorAll('.swip-text')

// functions
const activeSwiperSec = (index) => {
    allLotsSwiper.forEach((swiper) =>{
        swiper.classList.add('d-none')
    })
    allLotsSwiper[index].classList.remove('d-none')
}
// events
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