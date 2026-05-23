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
          ? "rgba(18, 16, 26, 0.94)"
          : "linear-gradient(to bottom, rgba(18, 16, 26, 0.95), transparent)";
    },
    { passive: true }
  );
}

const revealTargets = document.querySelectorAll(
  ".release-card, .video-card, .highlight-list li, .tour-item, .firefighter-inner, .merch-card"
);
if (revealTargets.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
