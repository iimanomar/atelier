const plannerForm = document.getElementById("plannerForm");
const formError = document.getElementById("formError");

if (plannerForm && formError) {
    plannerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const destination = document.getElementById("destination").value;
        const time = document.getElementById("time").value;
        const budget = document.getElementById("budget").value;

        const interests = [
            ...document.querySelectorAll(
                'input[name="interests"]:checked'
            )
        ].map((interest) => interest.value);

        if (!destination || !time || !budget || interests.length === 0) {
            formError.textContent =
                "Please choose a destination, time, budget and at least one interest.";

            return;
        }

        formError.textContent = "";

        const itineraryDetails = {
            destination,
            time,
            budget,
            interests
        };

        localStorage.setItem(
            "atelierPreferences",
            JSON.stringify(itineraryDetails)
        );

        window.location.href = "experience.html";
    });
}