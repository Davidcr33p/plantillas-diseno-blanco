/* ============================================================
 * Contorno Arquitectura - logica del sitio
 * Todo el contenido se lee de SITE_DATA (js/data.js).
 * ============================================================ */

(function () {
  "use strict";

  // main.js se comparte entre index.html (raiz) y templates/plantilla-N/,
  // asi que las rutas de assets en data.js se resuelven contra la carpeta
  // real donde vive este script, no contra la pagina que lo incluye.
  const ASSET_BASE = document.currentScript.src.replace(/js\/main\.js(?:[?#].*)?$/, "");
  const resolveAsset = (path) => (/^(https?:)?\/\//.test(path) ? path : ASSET_BASE + path);

  const ICONS = {
    phone: '<svg class="icon" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"/></svg>',
    envelope: '<svg class="icon" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/></svg>',
    instagram: '<svg class="icon" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>',
    mapPin: '<svg class="icon" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"/></svg>',
  };

  const state = {
    activeCategory: "Todos",
    lightboxIndex: 0,
  };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderNav();
    renderHero();
    renderAbout();
    renderStats();
    renderServices();
    renderFilters();
    renderGallery();
    renderFeatured();
    renderContact();
    renderFooter();

    setupHeaderScrollState();
    setupMobileMenu();
    setupReveal();
    setupLightbox();
  }

  /* ---------- Renderers (all data-driven from SITE_DATA) ---------- */

  function renderNav() {
    const listMarkup = SITE_DATA.nav
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
    document.getElementById("nav-list").innerHTML = listMarkup;
    document.getElementById("mobile-nav-list").innerHTML = listMarkup;
  }

  function renderHero() {
    const c = SITE_DATA.company;
    document.getElementById("hero-title").textContent = c.tagline;
    document.getElementById("hero-subtext").textContent = c.heroSubtext;
    const img = document.getElementById("hero-image");
    img.src = resolveAsset(c.heroImage);
    img.alt = `Fotografia de un proyecto de ${c.name}`;
  }

  function renderAbout() {
    const c = SITE_DATA.company;
    document.getElementById("about-eyebrow").textContent = c.aboutEyebrow;
    document.getElementById("about-title").textContent = c.aboutTitle;
    document.getElementById("about-text").textContent = c.aboutText;
    const img = document.getElementById("about-image");
    img.src = resolveAsset(c.aboutImage);
    img.alt = `Equipo y espacio de trabajo de ${c.name}`;
  }

  function renderStats() {
    const markup = SITE_DATA.stats
      .map(
        (s) => `
        <div class="stat">
          <span class="stat-value">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>`
      )
      .join("");
    document.getElementById("stats-row").innerHTML = markup;
  }

  function renderServices() {
    const markup = SITE_DATA.services
      .map(
        (s, i) => `
        <li class="service-item">
          <span class="service-index">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <p class="service-title">${s.title}</p>
            <p class="service-description">${s.description}</p>
          </div>
        </li>`
      )
      .join("");
    document.getElementById("services-list").innerHTML = markup;
  }

  function renderFilters() {
    const container = document.getElementById("filters");
    container.innerHTML = SITE_DATA.categories
      .map(
        (cat, i) => `
        <button class="filter-btn${i === 0 ? " is-active" : ""}" data-category="${cat}" type="button">
          ${cat}
        </button>`
      )
      .join("");

    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      state.activeCategory = btn.dataset.category;
      container
        .querySelectorAll(".filter-btn")
        .forEach((el) => el.classList.toggle("is-active", el === btn));
      applyFilter();
    });
  }

  function renderGallery() {
    const container = document.getElementById("masonry");
    container.innerHTML = SITE_DATA.projects
      .map((p, i) => {
        const aspect = p.size === "tall" ? "3 / 4" : p.size === "wide" ? "4 / 3" : "1 / 1";
        return `
        <figure class="masonry-item" data-category="${p.category}" data-index="${i}" data-size="${p.size || "square"}" tabindex="0" role="button" aria-label="Ver proyecto ${p.title}">
          <img src="${resolveAsset(p.image)}" alt="${p.title}, ${p.category} en ${p.location}" style="aspect-ratio:${aspect}; object-fit:cover;" loading="lazy" />
          <figcaption class="masonry-caption">
            <span class="title">${p.title}</span>
            <span class="meta">${p.category} - ${p.location}</span>
          </figcaption>
        </figure>`;
      })
      .join("");

    container.addEventListener("click", (e) => {
      const item = e.target.closest(".masonry-item");
      if (!item) return;
      openLightbox(Number(item.dataset.index));
    });

    container.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const item = e.target.closest(".masonry-item");
      if (!item) return;
      e.preventDefault();
      openLightbox(Number(item.dataset.index));
    });
  }

  function applyFilter() {
    const items = document.querySelectorAll(".masonry-item");
    items.forEach((item) => {
      const matches = state.activeCategory === "Todos" || item.dataset.category === state.activeCategory;
      item.classList.toggle("is-hidden", !matches);
    });
  }

  function renderFeatured() {
    const f = SITE_DATA.featuredProject;
    document.getElementById("featured-eyebrow").textContent = f.eyebrow;
    document.getElementById("featured-title").textContent = f.title;
    document.getElementById("featured-description").textContent = f.description;
    document.getElementById("featured-meta").textContent = `${f.location}, ${f.year}`;
    const img = document.getElementById("featured-image");
    img.src = resolveAsset(f.image);
    img.alt = `${f.title}, ${f.location}`;
  }

  function renderContact() {
    const c = SITE_DATA.contact;
    document.getElementById("contact-cta-text").textContent = c.ctaText;

    const items = [
      { icon: ICONS.phone, label: c.phoneDisplay, href: `tel:${c.phoneHref}` },
      { icon: ICONS.envelope, label: c.email, href: `mailto:${c.email}` },
      { icon: ICONS.instagram, label: c.instagramHandle, href: c.instagramUrl },
      { icon: ICONS.mapPin, label: c.address, href: null },
    ];

    document.getElementById("contact-list").innerHTML = items
      .map(
        (item) => `
        <li>
          <span class="contact-icon">${item.icon}</span>
          ${
            item.href
              ? `<a href="${item.href}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">${item.label}</a>`
              : `<span class="static">${item.label}</span>`
          }
        </li>`
      )
      .join("");
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    document.getElementById("footer-copy").textContent = `© ${year} ${SITE_DATA.footer.copyrightName}`;
    document.getElementById("footer-nav-list").innerHTML = SITE_DATA.nav
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
  }

  /* ---------- Header scroll state (no scroll listeners, per IO) ---------- */

  function setupHeaderScrollState() {
    const header = document.getElementById("site-header");
    const sentinel = document.getElementById("scroll-sentinel");
    const observer = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
  }

  /* ---------- Mobile menu ---------- */

  function setupMobileMenu() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-menu");

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
    });

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  }

  /* ---------- Lightbox ---------- */

  let lastFocusedElement = null;

  function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightbox-next").addEventListener("click", () => stepLightbox(1));

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function openLightbox(index) {
    state.lightboxIndex = index;
    lastFocusedElement = document.activeElement;
    updateLightboxContent();
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("lightbox-close").focus();
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function stepLightbox(direction) {
    const total = SITE_DATA.projects.length;
    state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const project = SITE_DATA.projects[state.lightboxIndex];
    const img = document.getElementById("lightbox-image");
    img.src = resolveAsset(project.image);
    img.alt = `${project.title}, ${project.category} en ${project.location}`;
    document.getElementById("lightbox-caption").innerHTML = `
      <strong>${project.title}</strong>
      ${project.category}, ${project.location} - ${project.year}
    `;
  }
})();
