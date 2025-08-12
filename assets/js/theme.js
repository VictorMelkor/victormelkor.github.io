const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

// Verifica se existe preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.className = savedTheme; // Aplica a preferência salva
} else {
  html.className = 'dark'; // Fallback padrão
}

// Alternar tema manualmente
toggleBtn.addEventListener('click', () => {
  const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
  html.className = newTheme;
  localStorage.setItem('theme', newTheme);
});
