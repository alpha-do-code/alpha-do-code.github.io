/* ============================================================
   PORTFOLIO — Mamadou Alpha BALDE
   Thème · langue (FR/EN) · navigation · animations
   Le français est la source (dans le HTML). L'anglais vit ici.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- 1. THÈME ---------- */

  var themeToggle = document.getElementById("themeToggle");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute("content", theme === "light" ? "#FFFFFF" : "#0B0F14");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  /* ---------- 2. LANGUE / i18n ---------- */

  var EN = {
    "a11y.skip": "Skip to content",

    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.path": "Background",
    "nav.contact": "Contact",

    "hero.eyebrow": "Full Stack Developer · Thiès, Senegal",
    "hero.lead": "I design and run transactional web platforms, from the front end to production.",
    "hero.sub": "Full stack <strong>React</strong> / <strong>Node.js</strong> / <strong>TypeScript</strong> at FEVEO 2050. Certified in <strong>artificial intelligence and machine learning</strong>, I am extending that foundation toward intelligent systems applied to digital finance.",
    "hero.cta_projects": "See the projects",
    "hero.cta_cv": "Download CV",

    "stats.degree": "BSc in Software Engineering",
    "stats.job": "Full stack developer at FEVEO 2050",
    "stats.prod": "E-commerce shipped solo to production",
    "stats.certs": "Certifications, including AI & machine learning",

    "about.kicker": "About",
    "about.title": "A software-engineering foundation, heading toward AI",
    "about.p1": "I am a full stack developer with a BSc in Software Engineering from Université Iba Der Thiam in Thiès. Since November 2025 I have been working at <strong>FEVEO 2050 SAS</strong>, where I build and maintain an ecosystem of transactional platforms for a community of members: a marketplace, an electronic wallet, an online learning platform and a community space.",
    "about.p2": "I am one of the team's permanent developers. I shipped the first version of the community platform, I monitor every platform in production, and I fix the incidents reported directly by users, from diagnosis to patch.",
    "about.p3": "Certified in artificial intelligence and machine learning, I want to extend this foundation toward designing intelligent systems applied to digital finance, while keeping both feet in development.",
    "about.card_edu_t": "BSc, Software Engineering",
    "about.card_edu_d": "UIDT Thiès · 2022-2025",
    "about.card_loc_t": "Thiès, Senegal",
    "about.card_loc_d": "From Dakar · UTC+0 timezone",
    "about.card_lang_t": "French, English, Wolof, Pulaar",
    "about.card_lang_d": "English: solid academic level, technical docs",
    "about.card_ai_t": "Toward AI & data",
    "about.card_ai_d": "Force-N certified · active watch · master's planned",

    "stack.kicker": "Tech stack",
    "stack.title": "What I build with",
    "stack.desc": "My production foundation is in bold. The rest I have used in academic projects, personal work or ongoing learning.",
    "stack.front": "Front-end",
    "stack.back": "Back-end",
    "stack.data": "Databases",
    "stack.mobile": "Mobile & desktop",
    "stack.ops": "Deployment & tooling",
    "stack.ai": "AI & data",
    "stack.deepening": "deepening",
    "stack.langs_label": "Languages:",

    "projects.kicker": "Projects",
    "projects.title": "Things shipped, not just started",
    "projects.live": "In production",
    "projects.demo": "Live demo",
    "projects.code": "Source code",
    "projects.company": "Company project",
    "projects.internal": "Internal code, not public",
    "projects.wip": "In development",
    "projects.repo_soon": "Repo public soon",
    "projects.repo_private": "Private repo",
    "projects.multiplatform": "Android & iOS",

    "projects.gaye_role": "E-commerce · built solo, concept to production · 2026",
    "projects.gaye_desc": "A full online store. Client / server architecture: React + Vite on the front, Node.js + Express + TypeScript on the API, MongoDB for storage. Shipped a multi-service architecture with no hosting budget (Vercel, Render, MongoDB Atlas, Cloudinary). Security: JWT, bcrypt, Helmet, rate limiting.",
    "projects.gaye_note": "Wave mobile payment is still being integrated, disabled in the UI until it works end to end.",

    "projects.comm_title": "Community platform — FEVEO 2050",
    "projects.comm_role": "Front-end & API contribution · v1 shipped · 2026",
    "projects.comm_desc": "First version of a community and messaging space for a community of members in financial inclusion, designed to plug into the group's electronic wallet. Contributed to the front end and the API, then production monitoring and user-incident fixes.",

    "projects.ndim_role": "Urban mobility app · personal project",
    "projects.ndim_desc": "Trip assistance for the TATA AFTU bus network in Dakar: route search, fare by segment, offline mode. Flutter mobile app, Node.js + Express API with PostgreSQL and PostGIS, OpenStreetMap tiles with no proprietary key.",

    "projects.tail_role": "Tailoring workshop management · personal project",
    "projects.tail_desc": "Management app for tailoring workshops: client records, orders, measurements, models, invoices and subscriptions. Fully local (SQLite, Provider), no backend. Ported to Android and iOS, with GitHub Actions CI and integration tests.",

    "projects.more_title": "Other work",
    "projects.more_parr_t": "Sponsorship management, Senegal",
    "projects.more_parr": "Sponsorship validation workflows. Original version in HTML/CSS/JS, rebuild in progress with Next.js.",
    "projects.more_sen": "Desktop stock-management app, sales tracking and automated reports.",
    "projects.more_bfem_t": "BFEM exam deliberation software",
    "projects.more_bfem": "Data management and deliberation for candidates of the BFEM exam in Senegal.",
    "projects.more_evt_t": "Event management platform",
    "projects.more_evt": "Event creation, registrations, ticketing. Full stack academic project.",
    "projects.more_ansible_t": "Multi-server configuration deployment",
    "projects.more_ansible": "Configuration-management system, reusable playbooks, modular roles.",

    "path.kicker": "Background & certifications",
    "path.title": "Education and credentials",
    "path.lic_t": "BSc in Computer Science, Software Engineering track",
    "path.lic_d": "Software design, databases, web and mobile development.",
    "path.bac_t": "Scientific Baccalaureate, S2 stream",
    "path.certs_title": "Certifications",

    "contact.kicker": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.desc": "For a project, a collaboration or a question, drop me a line. I reply within 24 hours.",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location_v": "Thiès, Senegal · UTC+0",

    "footer.built": "Designed and built by me",
    "footer.top": "Back to top"
  };

  var i18nNodes = [];
  document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(function (el) {
    var html = el.hasAttribute("data-i18n-html");
    var key = el.getAttribute(html ? "data-i18n-html" : "data-i18n");
    i18nNodes.push({ el: el, key: key, html: html, fr: html ? el.innerHTML : el.textContent });
  });

  var langToggle = document.getElementById("langToggle");

  function applyLang(lang) {
    i18nNodes.forEach(function (n) {
      var value = lang === "en" ? (EN[n.key] != null ? EN[n.key] : n.fr) : n.fr;
      if (n.html) n.el.innerHTML = value;
      else n.el.textContent = value;
    });
    root.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}

    if (langToggle) {
      langToggle.querySelector(".lang-label").textContent = lang === "en" ? "FR" : "EN";
      langToggle.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
      langToggle.setAttribute("title", lang === "en" ? "Français" : "English");
    }
  }

  var startLang = "fr";
  try { startLang = localStorage.getItem("lang") || "fr"; } catch (e) {}
  if (startLang === "en") applyLang("en");
  else if (langToggle) langToggle.querySelector(".lang-label").textContent = "EN";

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(root.getAttribute("lang") === "en" ? "fr" : "en");
    });
  }

  /* ---------- 3. NAVIGATION MOBILE ---------- */

  var burger = document.getElementById("navBurger");
  var nav = document.getElementById("primaryNav");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 680) closeNav();
    });
  }

  /* ---------- 4. HEADER AU SCROLL ---------- */

  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 5. SCROLLSPY ---------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var spied = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    spied.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 6. RÉVÉLATION AU SCROLL ---------- */

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { revObs.observe(el); });
  }

  /* ---------- 7. DÉTAILS ---------- */

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Masquer le bouton CV tant que le PDF n'est pas en ligne
  var cvLink = document.getElementById("cvLink");
  if (cvLink) {
    fetch(cvLink.getAttribute("href"), { method: "HEAD" })
      .then(function (r) { if (r.status === 404) cvLink.hidden = true; })
      .catch(function () { /* réseau indisponible : on garde le bouton */ });
  }
})();
