document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll(".barra-skill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const barra = entry.target;
                const percent = barra.getAttribute("data-percent");
                barra.querySelector("::after"); // força reflow

                // anima a largura do preenchimento
                barra.style.setProperty("--width-final", percent + "%");
                barra.classList.add("animar");
                observer.unobserve(barra);
            }
        });
    }, { threshold: 0.4 });

    barras.forEach(barra => {
        barra.style.setProperty("--width-final", "0%");
        observer.observe(barra);
    });
});
