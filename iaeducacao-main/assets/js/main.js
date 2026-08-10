(() => {
  const header = document.querySelector("[data-site-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".sr-only").textContent = "Abrir menu";
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.querySelector(".sr-only").textContent = isOpen ? "Abrir menu" : "Fechar menu";
      menu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }

  const updateScrollState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);

    const progress = document.querySelector("[data-reading-progress]");
    if (progress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0;
      progress.style.width = `${percentage}%`;
    }
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  document.querySelectorAll("[data-current-year]").forEach((item) => {
    item.textContent = String(new Date().getFullYear());
  });

  const copyButton = document.querySelector("[data-copy-citation]");
  copyButton?.addEventListener("click", async () => {
    const citation =
      "WILLIAMSON, Ben; EYNON, Rebecca. Historical threads, missing links, and future directions in AI in education. Learning, Media and Technology, v. 45, n. 3, p. 223–235, 2020. https://doi.org/10.1080/17439884.2020.1798995";
    try {
      await navigator.clipboard.writeText(citation);
      copyButton.textContent = "Referência copiada";
      window.setTimeout(() => {
        copyButton.textContent = "Copiar referência";
      }, 2400);
    } catch {
      copyButton.textContent = "Não foi possível copiar";
    }
  });
})();
