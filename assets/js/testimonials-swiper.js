const swiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        loop: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        1440: {
            slidesPerView: 1,
            spaceBetween: 32,
        }
    }
});
