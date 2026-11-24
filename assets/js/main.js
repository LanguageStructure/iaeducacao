(() => {
  const header = document.querySelector("[data-site-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const closeMenu = () => { if (!menuButton || !menu) return; menuButton.setAttribute("aria-expanded", "false"); menuButton.querySelector(".sr-only").textContent = "Abrir menu"; menu.classList.remove("is-open"); document.body.classList.remove("menu-open"); };
  if (menuButton && menu) { menuButton.addEventListener("click", () => { const isOpen = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!isOpen)); menuButton.querySelector(".sr-only").textContent = isOpen ? "Abrir menu" : "Fechar menu"; menu.classList.toggle("is-open", !isOpen); document.body.classList.toggle("menu-open", !isOpen); }); menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu)); document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); }); const desktopQuery = window.matchMedia("(min-width: 901px)"); desktopQuery.addEventListener("change", (event) => { if (event.matches) closeMenu(); }); }
  const updateScrollState = () => { header?.classList.toggle("is-scrolled", window.scrollY > 12); const progress = document.querySelector("[data-reading-progress]"); if (progress) { const scrollable = document.documentElement.scrollHeight - window.innerHeight; const percentage = scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0; progress.style.width = `${percentage}%`; } };
  updateScrollState(); window.addEventListener("scroll", updateScrollState, { passive: true });
  document.querySelectorAll("[data-current-year]").forEach((item) => { item.textContent = String(new Date().getFullYear()); });
  const copyButton = document.querySelector("[data-copy-citation]"); copyButton?.addEventListener("click", async () => { const citation = "WILLIAMSON, Ben; EYNON, Rebecca. Historical threads, missing links, and future directions in AI in education. Learning, Media and Technology, v. 45, n. 3, p. 223–235, 2020. https://doi.org/10.1080/17439884.2020.1798995"; try { await navigator.clipboard.writeText(citation); copyButton.textContent = "Referência copiada"; window.setTimeout(() => { copyButton.textContent = "Copiar referência"; }, 2400); } catch { copyButton.textContent = "Não foi possível copiar"; } });

  const meetingLinks = {
    "04": { href: "encontro-4/", label: "Acessar roteiro, questões e atividade" },
    "05": { href: "encontro-5/", label: "Acessar roteiro, conceitos e atividade" },
    "06": { href: "encontro-6/", label: "Acessar roteiro, conceitos e atividade" },
    "07": { href: "encontro-7/", label: "Acessar evidências, conceitos e atividade" },
  };
  document.querySelectorAll(".timeline-item").forEach((item) => {
    const number = item.querySelector(".timeline-index span")?.textContent?.trim();
    const config = meetingLinks[number];
    const content = item.querySelector(".timeline-content");
    if (!config || !content) return;
    item.classList.add("is-featured");
    if (!content.querySelector(".text-link")) {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = config.href;
      link.innerHTML = `${config.label} <span>→</span>`;
      content.appendChild(link);
    }
  });

  /* Defensive fallback for Encontro 7: highlight it even if the timeline markup changes slightly. */
  document.querySelectorAll("#cronograma .timeline-item").forEach((item) => {
    const text = item.textContent || "";
    if (!text.includes("Desempenho não é aprendizagem")) return;
    item.classList.add("is-featured");
    const content = item.querySelector(".timeline-content") || item;
    if (!content.querySelector('a[href="encontro-7/"]')) {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = "encontro-7/";
      link.innerHTML = `Acessar evidências, conceitos e atividade <span>→</span>`;
      content.appendChild(link);
    }
  });

  const bibliography = document.querySelector("#bibliografia .bibliography-list");
  const addReference = (key, html) => { if (!bibliography || bibliography.querySelector(`[data-${key}]`)) return; const reference = document.createElement("article"); reference.className = "reference"; reference.setAttribute(`data-${key}`, "true"); reference.innerHTML = html; bibliography.appendChild(reference); };

  if (window.location.pathname.includes("/encontro-3/")) { const papagaios = document.querySelector("#papagaios"); const firstThreadList = papagaios?.querySelector(".thread-list"); if (papagaios && firstThreadList && !papagaios.querySelector("[data-mental-states-definition]")) { const definition = document.createElement("div"); definition.className = "implication-box"; definition.dataset.mentalStatesDefinition = "true"; definition.innerHTML = `<p class="thesis-label">Definição</p><h3>O que são estados mentais?</h3><p><strong>Estados mentais</strong> são condições ou episódios atribuídos a uma mente, como crenças, desejos, intenções, percepções, emoções, lembranças, expectativas e experiências conscientes. Em filosofia da mente, atribuir um estado mental a um agente significa atribuir-lhe algo que possui conteúdo ou perspectiva e que pode ajudar a explicar seu comportamento.</p><p>Não se deve, portanto, confundir <strong>estado mental</strong> com <strong>estado interno de um sistema computacional</strong>. Uma rede neural possui estados internos — ativações, vetores e configurações numéricas —, mas permanece uma questão filosófica se esses estados também devem ser interpretados como crenças, intenções, compreensão ou consciência.</p>`; firstThreadList.before(definition); } }

  const instructorCards = document.querySelectorAll("#ministrantes .instructor-profile");
  if (instructorCards.length >= 2) { const fabricioBio = instructorCards[0].querySelector(".instructor-profile-copy > p:last-child"); const cristianeBio = instructorCards[1].querySelector(".instructor-profile-copy > p:last-child"); if (fabricioBio) fabricioBio.textContent = "É doutor em linguística geral e mestre em linguística computacional pela universidade de Tübingen (Alemanha). Mestre em língua hebraica (USP, Brasil), e bacharel em letras clássicas, grego antigo e latim, pelo PIAL (UNISAL) (Roma, Itália)."; if (cristianeBio) cristianeBio.textContent = "Doutora em Educação em Ciência pela Unesp e mestra em Ensino de Ciências e Matemática pela UNEMAT. Graduada em Ciências Biológicas pela Universidade Federal de Mato Grosso (2002) e em Pedagogia pela Universidade do Estado de Mato Grosso (2001), é especialista em Educação Especial pela Universidade de Cuiabá (UNIC). Tem experiência na área de Educação, com ênfase em ensino-aprendizagem e interdisciplinaridade."; const setPortrait = (card, src, alt) => { const placeholder = card.querySelector(".instructor-photo-placeholder"); if (!placeholder) return; const image = document.createElement("img"); image.src = src; image.alt = alt; image.loading = "lazy"; image.style.cssText = "display:block;width:100%;aspect-ratio:1/1;object-fit:contain;object-position:center;background:#14213d;"; placeholder.replaceWith(image); }; setPortrait(instructorCards[0], "assets/images/fabricio.png", "Dr. Fabrício Ferraz Gerardi"); setPortrait(instructorCards[1], "assets/images/cristiane.jpeg", "Dra. Cristiane Poltronieri"); }
})();