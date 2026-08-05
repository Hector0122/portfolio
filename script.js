// Menú móvil
const nav = document.getElementById("nav");
const burger = document.getElementById("nav-burger");
if (burger) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
}

// Botón de imprimir/descargar CV (cv.html)
const printBtn = document.getElementById("print-btn");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

// Cierra el menú móvil al elegir un link
document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("nav--open"));
});

// Tema claro/oscuro persistente
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const isDark = current === "dark" || (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

// Año en el footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
