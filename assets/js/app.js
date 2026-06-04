function configurarMenuMobile() {
  const toggler = document.querySelector(".navbar-toggler");

  if (!toggler) {
    return;
  }

  const target = toggler.dataset.bsTarget;
  const menu = target ? document.querySelector(target) : null;

  if (!menu || window.bootstrap) {
    return;
  }

  toggler.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    toggler.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  configurarMenuMobile();
});
