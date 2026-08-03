const navbar = document.querySelector(".navbar");

const pageHero =
    document.querySelector(".hero") ||
    document.querySelector(".discover-hero") ||
    document.querySelector(".planner-page") ||
    document.querySelector(".experience-hero") ||
    document.querySelector(".moments-hero");

const isMomentsPage =
    Boolean(document.querySelector(".moments-hero"));

function updateNavbar() {
    if (!navbar) {
        return;
    }

    const navbarColors = isMomentsPage
        ? {
            red: 246,
            green: 239,
            blue: 228,
            border: "86, 66, 42",
            shadow: "68, 50, 30"
        }
        : {
            red: 8,
            green: 16,
            blue: 12,
            border: "255, 255, 255",
            shadow: "0, 0, 0"
        };

    if (!pageHero) {
        navbar.style.background =
            `rgba(
                ${navbarColors.red},
                ${navbarColors.green},
                ${navbarColors.blue},
                0.94
            )`;

        navbar.style.backdropFilter =
            "blur(24px) saturate(150%)";

        navbar.style.webkitBackdropFilter =
            "blur(24px) saturate(150%)";

        navbar.style.borderBottom =
            `1px solid rgba(${navbarColors.border}, 0.1)`;

        return;
    }

    const heroHeight = pageHero.offsetHeight;

    const fadeStart = 40;

    const fadeEnd = Math.min(
        Math.max(heroHeight * 0.45, 280),
        520
    );

    let opacity =
        (window.scrollY - fadeStart) /
        (fadeEnd - fadeStart);

    opacity = Math.max(
        0,
        Math.min(opacity, 1)
    );

    const minimumOpacity =
        isMomentsPage ? 0.72 : 0;

    const finalOpacity =
        minimumOpacity +
        opacity * (0.94 - minimumOpacity);

    navbar.style.background =
        `rgba(
            ${navbarColors.red},
            ${navbarColors.green},
            ${navbarColors.blue},
            ${finalOpacity}
        )`;

    navbar.style.backdropFilter =
        `blur(${8 + opacity * 16}px)
         saturate(${120 + opacity * 30}%)`;

    navbar.style.webkitBackdropFilter =
        `blur(${8 + opacity * 16}px)
         saturate(${120 + opacity * 30}%)`;

    navbar.style.borderBottom =
        `1px solid rgba(
            ${navbarColors.border},
            ${0.05 + opacity * 0.07}
        )`;

    navbar.style.boxShadow =
        `0 12px 35px rgba(
            ${navbarColors.shadow},
            ${opacity * 0.1}
        )`;
}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateNavbar
);

window.addEventListener(
    "load",
    updateNavbar
);

updateNavbar();