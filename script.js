const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const yearEl = document.getElementById("year");
const tabButtons = document.querySelectorAll("[data-skill-tab]");
const skillCards = document.querySelectorAll("[data-skill-group]");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => siteNav.classList.remove("open"));
  });
}

if (tabButtons.length) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.skillTab;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      skillCards.forEach((card) => {
        const group = card.dataset.skillGroup;
        const shouldShow = target === "all" || group === target;
        card.style.display = shouldShow ? "block" : "none";
      });
    });
  });
}

