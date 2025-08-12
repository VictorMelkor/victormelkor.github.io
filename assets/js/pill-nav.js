window.addEventListener("load", () => {
  const nav = document.querySelector("nav");
  const links = nav.querySelectorAll("a");

  const isMobile = () => window.innerWidth < 768;

  const setActiveLinkByURL = () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (!nav.querySelector("a.active")) {
      const activeLink = Array.from(links).find(l => l.getAttribute("href") === currentPage);
      (activeLink || links[0]).classList.add("active");
    }
  };

  const movePill = (target, instant = false) => {
    if (isMobile() || !target) return;

    let pillEl = nav.querySelector(".pill");
    if (!pillEl) {
      pillEl = document.createElement("span");
      pillEl.classList.add("pill");
      nav.appendChild(pillEl);
    }

    // só desativa transição no carregamento inicial
    pillEl.style.transition = instant ? "none" : "all 0.3s ease";

    const rect = target.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    pillEl.style.width = `${rect.width}px`;
    pillEl.style.height = `${rect.height - 6}px`;
    pillEl.style.left = `${rect.left - navRect.left}px`;
    pillEl.style.top = `10px`;

    // reativa transição apenas quando foi desligada no load
    if (instant) {
      requestAnimationFrame(() => {
        pillEl.style.transition = "all 0.3s ease";
      });
    }
  };

  // CSS do pill
  const style = document.createElement("style");
  style.innerHTML = `
    nav .pill {
      position: absolute;
      top: 10px;
      left: 0;
      background-color: var(--color-pink);
      border-radius: 50px;
      z-index: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  // inicializa
  setActiveLinkByURL();
  movePill(nav.querySelector("a.active") || links[0], true);

  // clique: só anima em hash links
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (link.getAttribute("href").startsWith("#")) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        movePill(link, false); // 🔥 desliza corretamente
      }
    });
  });

  // resize: agora sempre anima
  window.addEventListener("resize", () => {
    const pillEl = nav.querySelector(".pill");
    if (isMobile()) {
      if (pillEl) pillEl.remove();
    } else {
      const activeLink = nav.querySelector("a.active") || links[0];
      movePill(activeLink, false); // 🔥 desliza também no resize
    }
  });
});
