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

var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
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
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swip-btn-next-blog",
        prevEl: ".swip-btn-prev-blog",
    },
});

var swiper = new Swiper(".imageSwiper", {
    slidesPerView: 1,
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
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        
        },
    },
    navigation: {
        nextEl: ".swip-btn-next-image",
        prevEl: ".swip-btn-prev-image",
    },
  });