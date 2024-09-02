const navLotPar = document.querySelectorAll('.nav-lot-par')
const allLotsSwiper = document.querySelectorAll('.allLotsSwiper')

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