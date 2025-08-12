const btnScrollTop = document.querySelector('.btn-scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnScrollTop.style.display = 'flex';
    } else {
        btnScrollTop.style.display = 'none';
    }
});

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});