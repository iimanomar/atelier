const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const heroHeight = hero.offsetHeight;

    // 0 = top of hero
    // 1 = bottom of hero
    let progress = window.scrollY / heroHeight;

    // Keep between 0 and 1
    progress = Math.max(0, Math.min(progress, 1));

    // Don't start fading immediately
    const fadeStart = 0.25;
    const fadeEnd = 0.70;

    let opacity = 0;

    if (progress > fadeStart) {
        opacity = (progress - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.min(opacity, 1);
    }

    navbar.style.background = `rgba(8,16,12,${opacity * 0.22})`;

    navbar.style.backdropFilter =
        `blur(${opacity * 22}px) saturate(${100 + opacity * 45}%)`;

    navbar.style.webkitBackdropFilter =
        `blur(${opacity * 22}px) saturate(${100 + opacity * 45}%)`;

    navbar.style.borderBottom =
        `1px solid rgba(255,255,255,${opacity * 0.08})`;

});