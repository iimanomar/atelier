const navbar =
    document.querySelector(".navbar");
const pageHero =
    document.querySelector(".hero") ||
    document.querySelector(".discover-hero") ||
    document.querySelector(".planner-page") ||
    document.querySelector(".experience-hero") ||
    document.querySelector(".moments-hero");

const isMomentsPage =
    Boolean(document.querySelector(".moments-hero"));
const isMemoryPage =
    Boolean(document.querySelector(".memory-hero"));

function updateNavbar() {
    if (!navbar) {
        return;
    } 
    if (document.body.classList.contains("signup-page-body")) {
        return;
    }
   
    /*
      Moments has its own navbar styling
      controlled by moments.css and moments.js.
    */
    if (isMomentsPage) {
        navbar.removeAttribute("style");
        return;
    }
    const navbarColors = {
        red: 8,
        green: 16,
        blue: 12,
        border: "255, 255, 255",
        shadow: "0, 0, 0"
    };
    if (isMemoryPage) {
        navbar.style.background =
            window.scrollY > 30
                ? "rgba(245, 238, 225, 0.92)"
                : "transparent";

        navbar.style.backdropFilter =
            window.scrollY > 30
                ? "blur(28px) saturate(160%)"
                : "blur(0)";

        navbar.style.webkitBackdropFilter =
            window.scrollY > 30
                ? "blur(28px) saturate(160%)"
                : "blur(0)";

        navbar.style.borderBottom =
            window.scrollY > 30
                ? "1px solid rgba(124, 94, 52, 0.12)"
                : "1px solid transparent";

        return;
    }
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

    /*
      Completely clear at the top.
      Blur gradually appears while scrolling.
    */
    const blurAmount =
        isMomentsPage
            ? 18 + opacity * 6
            : opacity * 24;

    const saturationAmount =
        isMomentsPage
            ? 140 + opacity * 10
            : 100 + opacity * 50;

    navbar.style.backdropFilter =
        `blur(${blurAmount}px)
         saturate(${saturationAmount}%)`;

    navbar.style.webkitBackdropFilter =
        `blur(${blurAmount}px)
         saturate(${saturationAmount}%)`;

    navbar.style.borderBottom =
        `1px solid rgba(
            ${navbarColors.border},
            ${isMomentsPage
            ? 0.08 + opacity * 0.04
            : opacity * 0.08}
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
/* ==================================
   SIGN IN MODAL
================================== */
const openSignInButtons =
    document.querySelectorAll(".open-signin");

const closeSignIn =
    document.getElementById("closeSignIn");

const signinOverlay =
    document.getElementById("signinOverlay");

const signinForm =
    document.getElementById("signinForm");

const signinEmail =
    document.getElementById("signinEmail");

const signinPassword =
    document.getElementById("signinPassword");

const signinError =
    document.getElementById("signinError");

const passportVerify =
    document.getElementById("passportVerify");

const signinSubmit =
    document.getElementById("signinSubmit");


function openSigninModal() {
    if (!signinOverlay) {
        return;
    }

    signinOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
        signinEmail?.focus();
    }, 250);
}


function closeSigninModal() {
    if (!signinOverlay) {
        return;
    }

    signinOverlay.classList.remove("active");
    document.body.style.overflow = "";

    passportVerify?.classList.remove("active");

    passportVerify
        ?.querySelectorAll(
            ".secret-boarding-pass, .secret-message"
        )
        .forEach((element) => {
            element.remove();
        });

    if (signinForm) {
        signinForm.style.display = "";
        signinForm.reset();
    }

    if (signinSubmit) {
        signinSubmit.textContent =
            "Enter Atelier →";

        signinSubmit.disabled = false;
    }

    if (signinError) {
        signinError.textContent = "";
    }
}


function revealSecretBoardingPass() {
    if (!passportVerify) {
        return;
    }

    const destinations = [
        {
            city: "Marrakech",
            code: "RAK",
            gate: "A12",
            seat: "07A"
        },
        {
            city: "Istanbul",
            code: "IST",
            gate: "B08",
            seat: "14F"
        },
        {
            city: "Dubai",
            code: "DXB",
            gate: "C21",
            seat: "09A"
        },
        {
            city: "Nairobi",
            code: "NBO",
            gate: "A04",
            seat: "18C"
        },
        {
            city: "Guangzhou",
            code: "CAN",
            gate: "D16",
            seat: "11F"
        },
        {
            city: "Kuala Lumpur",
            code: "KUL",
            gate: "B19",
            seat: "06A"
        }
    ];

    const destination =
        destinations[
        Math.floor(
            Math.random() *
            destinations.length
        )
        ];

    const boardingPass =
        document.createElement("div");

    boardingPass.className =
        "secret-boarding-pass";

    boardingPass.innerHTML = `
        <div class="boarding-pass-top">
            <span>Destination unlocked</span>
            <span>Atelier Air</span>
        </div>

        <div class="boarding-pass-main">

            <div class="boarding-location">
                <span>From</span>
                <strong>HOME</strong>
            </div>

            <div class="boarding-plane-track">
                <span class="boarding-plane">✈</span>
            </div>

            <div class="boarding-location">
                <span>${destination.city}</span>
                <strong>${destination.code}</strong>
            </div>

        </div>

        <div class="boarding-pass-bottom">
            <span>Gate ${destination.gate}</span>
            <span>Seat ${destination.seat}</span>
            <span>Boarding now</span>
        </div>
    `;

    const secretMessage =
        document.createElement("p");

    secretMessage.className =
        "secret-message";

    secretMessage.textContent =
        "A new story has quietly begun.";

    passportVerify.appendChild(
        boardingPass
    );

    passportVerify.appendChild(
        secretMessage
    );
}


/* Open modal */

openSignInButtons.forEach((button) => {
    button.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            openSigninModal();
        }
    );
});


/* Close button */

if (closeSignIn) {
    closeSignIn.addEventListener(
        "click",
        closeSigninModal
    );
}


/* Click outside modal */

if (signinOverlay) {
    signinOverlay.addEventListener(
        "click",
        (event) => {
            if (event.target === signinOverlay) {
                closeSigninModal();
            }
        }
    );
}


/* Escape key */

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            signinOverlay?.classList.contains("active")
        ) {
            closeSigninModal();
        }
    }
);


/* Sign in */

if (
    signinForm &&
    signinEmail &&
    signinPassword &&
    signinError &&
    passportVerify &&
    signinSubmit
) {
    signinForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            let storedUser;

            try {
                storedUser =
                    JSON.parse(
                        localStorage.getItem(
                            "atelierUser"
                        )
                    );
            } catch (error) {
                storedUser = null;
            }

            if (!storedUser) {
                signinError.textContent =
                    "No Atelier account found. Create one first.";

                return;
            }

            const enteredEmail =
                signinEmail.value
                    .trim()
                    .toLowerCase();

            const savedEmail =
                String(storedUser.email || "")
                    .trim()
                    .toLowerCase();

            if (enteredEmail !== savedEmail) {
                signinError.textContent =
                    "We couldn't find that traveller.";

                return;
            }

            if (
                storedUser.password &&
                signinPassword.value !==
                storedUser.password
            ) {
                signinError.textContent =
                    "That passport password doesn't match.";

                return;
            }

            if (
                !storedUser.password &&
                signinPassword.value.length < 8
            ) {
                signinError.textContent =
                    "Passport password must contain at least 8 characters.";

                return;
            }

            signinError.textContent = "";

            signinSubmit.textContent =
                "Preparing your journal...";

            signinSubmit.disabled = true;

            signinForm.style.display = "none";

            passportVerify
                .querySelectorAll(
                    ".secret-boarding-pass, .secret-message"
                )
                .forEach((element) => {
                    element.remove();
                });

            passportVerify.classList.add(
                "active"
            );

            revealSecretBoardingPass();

            window.setTimeout(() => {
                window.location.href =
                    "moments.html";
            }, 3600);
        }
    );
}
function resetAtelierDemo() {
    const confirmed = window.confirm(
        "Reset Atelier and remove all demo memories?"
    );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("atelierUser");
    localStorage.removeItem("atelierGeneratedJourney");
    localStorage.removeItem("atelierSavedJourneys");

    window.location.href = "index.html";
}

window.resetAtelierDemo = resetAtelierDemo;