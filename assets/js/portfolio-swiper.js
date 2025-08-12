document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os containers do swiper dentro dos cards do portfólio
    const swipers = document.querySelectorAll('.portfolio .swiper');

    swipers.forEach((swiperEl) => {
        new Swiper(swiperEl, {
            loop: true,
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            // Outros parâmetros que queira adicionar:
            // autoplay: { delay: 4000, disableOnInteraction: false },
            // speed: 600,
        });
    });
});