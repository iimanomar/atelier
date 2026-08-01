const navbar = document.querySelector(".navbar");

const pageHero =
    document.querySelector(".hero") ||
    document.querySelector(".discover-hero") ||
    document.querySelector(".planner-page");

if (navbar && pageHero) {
    window.addEventListener("scroll", () => {
        const heroHeight = pageHero.offsetHeight;

        let progress = window.scrollY / heroHeight;

        progress = Math.max(0, Math.min(progress, 1));

        const fadeStart = 0.18;
        const fadeEnd = 0.62;

        let opacity = 0;

        if (progress > fadeStart) {
            opacity =
                (progress - fadeStart) /
                (fadeEnd - fadeStart);

            opacity = Math.min(opacity, 1);
        }

        navbar.style.background =
            `rgba(8,16,12,${opacity * 0.72})`;

        navbar.style.backdropFilter =
            `blur(${opacity * 22}px) saturate(${100 + opacity * 45}%)`;

        navbar.style.webkitBackdropFilter =
            `blur(${opacity * 22}px) saturate(${100 + opacity * 45}%)`;

        navbar.style.borderBottom =
            `1px solid rgba(255,255,255,${opacity * 0.08})`;
    });
}