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

// Contacto ofuscado: el email/teléfono no existen como texto plano en el
// HTML ni aquí arriba en el .js — se reconstruyen recién al cargar la
// página, para no quedar expuestos a scrapers de spam masivo.
const deobfuscate = (s) => s.split("").reverse().join("");

const EMAIL_R = "moc.liamg@459evaph";
const TEL_HREF_R = "007952146625+";
const TEL_DISPLAY_R = "0079 521 466";

function populateContactInfo() {
  const email = deobfuscate(EMAIL_R);
  const telHref = deobfuscate(TEL_HREF_R);
  const telDisplay = deobfuscate(TEL_DISPLAY_R);

  const heroEmail = document.getElementById("hero-email");
  if (heroEmail) heroEmail.textContent = email;

  const emailLink = document.getElementById("email-contact-link");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = `📧 ${email}`;
  }

  const phoneLink = document.getElementById("phone-contact-link");
  if (phoneLink) {
    phoneLink.href = `tel:${telHref}`;
    phoneLink.textContent = `📱 ${telDisplay}`;
  }

  const cvPhone = document.getElementById("cv-phone");
  if (cvPhone) cvPhone.textContent = telDisplay;

  const cvEmailLink = document.getElementById("cv-email-link");
  if (cvEmailLink) {
    cvEmailLink.href = `mailto:${email}`;
    cvEmailLink.textContent = email;
  }
}

populateContactInfo();
