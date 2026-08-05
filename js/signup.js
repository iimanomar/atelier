const signupPageNavbar =
    document.querySelector(".navbar");
const signupForm =
    document.getElementById("signupForm");

const signupFormView =
    document.getElementById("signupFormView");

const signupSuccess =
    document.getElementById("signupSuccess");

const formError =
    document.getElementById("formError");

const firstNameInput =
    document.getElementById("firstName");

const lastNameInput =
    document.getElementById("lastName");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const termsInput =
    document.getElementById("terms");

const passwordToggle =
    document.getElementById("passwordToggle");

const welcomeName =
    document.getElementById("welcomeName");

const memberDate =
    document.getElementById("memberDate");

const firstDestination =
    document.getElementById("firstDestination");

const passportStamp =
    document.getElementById("passportStamp");

const confettiContainer =
    document.getElementById("confettiContainer");

const paperPlane =
    document.getElementById("paperPlane");


const surpriseDestinations = [
    "Istanbul",
    "Kuala Lumpur",
    "Nairobi",
    "Marrakech",
    "Dubai",
    "Guangzhou"
];


function updateSignupNavbar() {
    if (!signupPageNavbar) {
        return;
    }

    signupPageNavbar.classList.toggle(
        "scrolled",
        window.scrollY > 25
    );
}



function togglePasswordVisibility() {
    const passwordIsHidden =
        passwordInput.type === "password";

    passwordInput.type =
        passwordIsHidden
            ? "text"
            : "password";

    passwordToggle.textContent =
        passwordIsHidden
            ? "Hide"
            : "Show";

    passwordToggle.setAttribute(
        "aria-label",
        passwordIsHidden
            ? "Hide password"
            : "Show password"
    );
}


function markInvalid(input, isInvalid) {
    input.classList.toggle(
        "invalid",
        isInvalid
    );
}


function validateSignup() {
    const firstName =
        firstNameInput.value.trim();

    const lastName =
        lastNameInput.value.trim();

    const password =
        passwordInput.value;

    markInvalid(
        firstNameInput,
        firstName.length < 2
    );

    markInvalid(
        lastNameInput,
        lastName.length < 2
    );

    markInvalid(
        emailInput,
        !emailInput.validity.valid
    );

    markInvalid(
        passwordInput,
        password.length < 8
    );

    if (firstName.length < 2) {
        return "Please enter your first name.";
    }

    if (lastName.length < 2) {
        return "Please enter your last name.";
    }

    if (!emailInput.validity.valid) {
        return "Please enter a valid email address.";
    }

    if (password.length < 8) {
        return "Your password needs at least 8 characters.";
    }

    if (!termsInput.checked) {
        return "Please agree before creating your Atelier.";
    }

    return "";
}


function chooseDestination() {
    const randomIndex =
        Math.floor(
            Math.random() *
            surpriseDestinations.length
        );

    return surpriseDestinations[randomIndex];
}


function createConfetti() {
    if (!confettiContainer) {
        return;
    }

    confettiContainer.innerHTML = "";

    const colours = [
        "#9b794a",
        "#b98a67",
        "#9cab91",
        "#eee0c7"
    ];

    for (let index = 0; index < 70; index += 1) {
        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.opacity =
            `${0.45 + Math.random() * 0.55}`;

        piece.style.background =
            colours[index % colours.length];

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.style.setProperty(
            "--fall-time",
            `${2.5 + Math.random() * 2.2}s`
        );

        confettiContainer.appendChild(piece);
    }

    window.setTimeout(() => {
        confettiContainer.innerHTML = "";
    }, 5200);
}


function triggerPaperPlane() {
    if (!paperPlane) {
        return;
    }

    paperPlane.classList.remove("fly");

    void paperPlane.offsetWidth;

    paperPlane.classList.add("fly");
}


function completeSignup() {
    const firstName =
        firstNameInput.value.trim();

    const lastName =
        lastNameInput.value.trim();

    const email =
        emailInput.value.trim();

    const destination =
        chooseDestination();

    const password =
        passwordInput.value;

    const user = {
        firstName,
        lastName,
        email,
        password,
        joinedAt:
            new Date().toISOString(),
        firstDestination:
            destination
    };


    localStorage.setItem(
        "atelierUser",
        JSON.stringify(user)
    );

    welcomeName.textContent =
        `${firstName} ${lastName}.`;

    memberDate.textContent =
        new Date().toLocaleDateString(
            "en-GB",
            {
                month: "short",
                year: "numeric"
            }
        );

    firstDestination.textContent =
        destination;

    signupFormView.classList.add("hidden");

    signupSuccess.classList.add("visible");

    signupSuccess.setAttribute(
        "aria-hidden",
        "false"
    );

    passportStamp.classList.add("stamped");

    createConfetti();
    triggerPaperPlane();
}


if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener(
        "click",
        togglePasswordVisibility
    );
}


if (signupForm) {
    signupForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const validationError =
                validateSignup();

            if (validationError) {
                formError.textContent =
                    validationError;

                return;
            }

            formError.textContent = "";

            completeSignup();
        }
    );
}


window.addEventListener(
    "scroll",
    updateSignupNavbar,
    {
        passive: true
    }
);

window.addEventListener(
    "load",
    updateSignupNavbar
);

updateSignupNavbar();