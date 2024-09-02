var swiper = new Swiper(".launchSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swip-btn-next",
        prevEl: ".swip-btn-prev",
      },
});

var swiper = new Swiper(".allLotsSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swip-btn-next-lot",
        prevEl: ".swip-btn-prev-lot",
      },
});