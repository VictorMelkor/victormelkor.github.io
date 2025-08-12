const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
  const isClickInsideNav = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeDistance = touchStartX - touchEndX;

  // Se deslizar da direita para a esquerda mais de 50px
  if (swipeDistance > 50 && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
}

