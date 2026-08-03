const navbar = document.querySelector(".navbar");

const pageHero =
    document.querySelector(".hero") ||
    document.querySelector(".discover-hero") ||
    document.querySelector(".planner-page") ||
    document.querySelector(".experience-hero");

function updateNavbar() {
    if (!navbar) return;

    /*
      Pages without a hero should simply keep
      the navbar background visible.
    */
    if (!pageHero) {
        navbar.style.background = "rgba(8, 16, 12, 0.88)";
        navbar.style.backdropFilter =
            "blur(24px) saturate(150%)";
        navbar.style.webkitBackdropFilter =
            "blur(24px) saturate(150%)";
        navbar.style.borderBottom =
            "1px solid rgba(255, 255, 255, 0.08)";
        return;
    }

    const heroHeight = pageHero.offsetHeight;

    /*
      Use pixels rather than screen proportions.
      This makes the fade behave consistently
      on both large and small screens.
    */
    const fadeStart = 40;
    const fadeEnd = Math.min(
        Math.max(heroHeight * 0.45, 280),
        520
    );

    let opacity =
        (window.scrollY - fadeStart) /
        (fadeEnd - fadeStart);

    opacity = Math.max(0, Math.min(opacity, 1));

    navbar.style.background =
        `rgba(8, 16, 12, ${opacity * 0.9})`;

    navbar.style.backdropFilter =
        `blur(${opacity * 24}px) saturate(${100 + opacity * 50}%)`;

    navbar.style.webkitBackdropFilter =
        `blur(${opacity * 24}px) saturate(${100 + opacity * 50}%)`;

    navbar.style.borderBottom =
        `1px solid rgba(255, 255, 255, ${opacity * 0.08})`;

    navbar.style.boxShadow =
        `0 12px 35px rgba(0, 0, 0, ${opacity * 0.12})`;
}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

window.addEventListener("resize", updateNavbar);

window.addEventListener("load", updateNavbar);

updateNavbar();