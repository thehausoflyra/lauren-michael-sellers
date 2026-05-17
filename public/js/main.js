const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
    toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener(
    "scroll",
    () => {
      header.style.background =
        window.scrollY > 40
          ? "rgba(20, 17, 15, 0.92)"
          : "linear-gradient(to bottom, rgba(20, 17, 15, 0.95), transparent)";
    },
    { passive: true }
  );
}
