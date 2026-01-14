const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
// Lightbox simple
document.addEventListener("click", (e) => {
  const img = e.target.closest(".grid img");
  if (!img) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fermer">×</button>
    <img src="${img.src}" alt="${img.alt}">
  `;

  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("lightbox") || ev.target.classList.contains("lightbox-close")) close();
  });
  document.addEventListener("keydown", function esc(ev) {
    if (ev.key === "Escape") {
      close();
      document.removeEventListener("keydown", esc);
    }
  });
});
