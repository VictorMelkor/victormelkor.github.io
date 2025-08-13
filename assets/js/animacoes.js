const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    const el = entrada.target;
    const ratio = entrada.intersectionRatio;

    if (ratio >= 0.2) {
      // Entrou: mostra e cancela qualquer timeout para sumir
      if (el._timeoutSaida) {
        clearTimeout(el._timeoutSaida);
        el._timeoutSaida = null;
      }
      el.classList.add('visivel');
      el.classList.remove('saindo');
    } else {
      // Saiu: espera 150ms para remover, evita piscadas rápidas
      if (!el._timeoutSaida) {
        el._timeoutSaida = setTimeout(() => {
          el.classList.remove('visivel');
          el.classList.add('saindo');
          el._timeoutSaida = null;
        }, 150);
      }
    }
  });
}, {
  threshold: [0, 0.2, 1]
});

document.querySelectorAll('.animar-section').forEach(el => observador.observe(el));




