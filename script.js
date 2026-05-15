/* ============================================
   PORTFOLIO ALPHA - SCRIPT.JS
   ============================================ */

/* ============================================
   1. DICTIONNAIRE DES TRADUCTIONS
   ============================================ */

const translations = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "👋 Bonjour, je suis",
      role: 'Développeur <span class="highlight">full-stack</span> · Spécialisation <span class="highlight">DevOps</span>',
      tagline: 'Développeur <strong>full-stack</strong> passionné par les solutions web, l\'<strong>automatisation</strong> et la <strong>conteneurisation Docker</strong>.',
      location: "📍 Dakar, Sénégal · 💼 Disponible pour collaborations",
      cta_projects: "💼 Voir mes projets",
      cta_contact: "📧 Me contacter"
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "👋 Hello, I'm",
      role: '<span class="highlight">Full-stack</span> Developer · <span class="highlight">DevOps</span> Specialization',
      tagline: '<strong>Full-stack</strong> developer passionate about web solutions, <strong>automation</strong>, and <strong>Docker containerization</strong>.',
      location: "📍 Dakar, Senegal · 💼 Available for collaboration",
      cta_projects: "💼 View my projects",
      cta_contact: "📧 Contact me"
    }
  }
};

/* ============================================
   2. FONCTION : RÉCUPÉRER UNE TRADUCTION
   ============================================ */

function getTranslation(lang, key) {
  // Découpe "nav.about" en ["nav", "about"]
  const keys = key.split(".");
  let result = translations[lang];

  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) return key; // Clé introuvable
  }

  return result;
}

/* ============================================
   3. FONCTION : APPLIQUER LA LANGUE
   ============================================ */

function applyLanguage(lang) {
  // Mettre à jour l'attribut <html lang="...">
  document.documentElement.setAttribute("lang", lang);

  // Traduire tous les éléments avec data-i18n (texte simple)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = getTranslation(lang, key);
  });

  // Traduire tous les éléments avec data-i18n-html (HTML autorisé)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = getTranslation(lang, key);
  });

  // Mettre à jour le texte du bouton (montre la langue OPPOSÉE)
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "fr" ? "EN" : "FR";
  }

  // Sauvegarder la préférence
  localStorage.setItem("preferred-lang", lang);
}

/* ============================================
   4. ÉCOUTEUR D'ÉVÉNEMENT SUR LE BOUTON
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Au chargement : restaurer la langue préférée (ou français par défaut)
  const savedLang = localStorage.getItem("preferred-lang") || "fr";
  applyLanguage(savedLang);

  // 2. Au clic sur le bouton : basculer entre fr et en
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentLang = document.documentElement.getAttribute("lang");
      const newLang = currentLang === "fr" ? "en" : "fr";
      applyLanguage(newLang);
    });
  }

  /* ============================================
     5. NAVIGATION ACTIVE AU SCROLL
     ============================================ */

  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section[id]');

  // Observer : détecte quelle section est dans le viewport
  const observerOptions = {
    rootMargin: "-40% 0px -50% 0px", // Active quand la section est au centre
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        // Retirer la classe active de tous les liens
        navLinks.forEach((link) => link.classList.remove("nav-link-active"));

        // Ajouter la classe active au bon lien
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("nav-link-active");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  /* ============================================
     6. HEADER DYNAMIQUE AU SCROLL
     ============================================ */

  const header = document.querySelector(".site-header");

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Appliquer immédiatement au chargement

  console.log("✅ Portfolio JS initialisé");
});