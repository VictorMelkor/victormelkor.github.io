document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            portfolioCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");

                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block";
                    card.style.opacity = "0";
                    setTimeout(() => card.style.opacity = "1", 100);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => card.style.display = "none", 300);
                }
            });
        });
    });
});
