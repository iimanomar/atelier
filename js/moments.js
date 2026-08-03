const memoryGrid =
    document.getElementById("memoryGrid");

const memoryEmpty =
    document.getElementById("memoryEmpty");

const journeyCount =
    document.getElementById("journeyCount");

const memoryCount =
    document.getElementById("memoryCount");


function formatMemoryDate(dateValue) {
    if (!dateValue) {
        return "Saved journey";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "Saved journey";
    }

    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


function getDestinationName(journey) {
    if (typeof journey.destination === "string") {
        return journey.destination;
    }

    if (journey.destination?.city) {
        return journey.destination.city;
    }

    if (journey.destination?.name) {
        return journey.destination.name;
    }

    if (journey.destinationName) {
        return journey.destinationName;
    }

    return "Your journey";
}


function getJourneyImage(journey) {
    const destination =
        getDestinationName(journey)
            .toLowerCase()
            .trim();

    const destinationImages = {
        morocco:
            "assets/images/morocco.jpg",

        marrakech:
            "assets/images/morocco.jpg",

        china:
            "assets/images/china.jpg",

        guangzhou:
            "assets/images/china.jpg",

        dubai:
            "assets/images/dubai.jpg",

        istanbul:
            "assets/images/istanbul.jpg",

        turkey:
            "assets/images/istanbul.jpg",

        türkiye:
            "assets/images/istanbul.jpg",

        nairobi:
            "assets/images/nairobi.jpg",

        kenya:
            "assets/images/nairobi.jpg",

        malaysia:
            "assets/images/malaysia.jpg",

        "kuala lumpur":
            "assets/images/malaysia.jpg"
    };

    if (destinationImages[destination]) {
        return destinationImages[destination];
    }

    if (journey.destination?.image) {
        return journey.destination.image;
    }

    return "assets/images/morocco.jpg";
}


function removeDuplicateJourneys(journeys) {
    const seen = new Set();

    return journeys.filter((journey) => {
        const destination =
            getDestinationName(journey);

        const activityNames =
            (journey.activities || [])
                .map((activity) => activity.name)
                .join("|");

        const duplicateKey =
            `${destination}-${activityNames}`;

        if (seen.has(duplicateKey)) {
            return false;
        }

        seen.add(duplicateKey);

        return true;
    });
}


function getSavedJourneys() {
    try {
        const storedJourneys =
            JSON.parse(
                localStorage.getItem(
                    "atelierSavedJourneys"
                )
            );

        if (!Array.isArray(storedJourneys)) {
            return [];
        }

        return removeDuplicateJourneys(
            storedJourneys
        );

    } catch (error) {
        console.error(
            "Could not read saved journeys:",
            error
        );

        return [];
    }
}


function updateJournalStats(journeys) {
    const totalPlaces =
        journeys.reduce(
            (total, journey) => {
                return total +
                    (journey.activities || []).length;
            },
            0
        );

    if (journeyCount) {
        journeyCount.textContent =
            journeys.length;
    }

    if (memoryCount) {
        memoryCount.textContent =
            totalPlaces;
    }
}


function createAlbum(journey) {
    const album =
        document.createElement("article");

    album.className =
        "memory-album";

    const destinationName =
        getDestinationName(journey);

    const image =
        getJourneyImage(journey);

    const activities =
        journey.activities || [];

    const numberOfPlaces =
        activities.length;

    const savedDate =
        formatMemoryDate(
            journey.savedAt ||
            journey.createdAt
        );

    album.innerHTML = `
        <div class="album-paper">

            <img
                src="${image}"
                alt=""
                class="memory-blur-image"
                aria-hidden="true"
            >

            <img
                src="${image}"
                alt="${destinationName}"
                class="memory-image"
            >

            <div class="album-labels">

                <span class="album-location">
                    ${destinationName}
                </span>

                <span class="album-count">
                    ${numberOfPlaces}
                    ${numberOfPlaces === 1
            ? "place"
            : "places"
        }
                </span>

            </div>

            <div class="album-caption">

                <span class="album-date">
                    ${savedDate}
                </span>

                <h3>
                    ${destinationName}
                </h3>

            </div>

        </div>
    `;

    album.addEventListener("click", () => {
        localStorage.setItem(
            "atelierSelectedMemory",
            JSON.stringify(journey)
        );

        window.location.href =
            "memory.html";
    });

    return album;
}


function renderMemoryAlbums() {
    if (!memoryGrid || !memoryEmpty) {
        return;
    }

    const savedJourneys =
        getSavedJourneys();

    memoryGrid.innerHTML = "";

    updateJournalStats(savedJourneys);

    if (savedJourneys.length === 0) {
        memoryGrid.style.display = "none";
        memoryEmpty.style.display = "flex";
        return;
    }

    memoryGrid.style.display = "grid";
    memoryEmpty.style.display = "none";

    savedJourneys.forEach((journey) => {
        memoryGrid.appendChild(
            createAlbum(journey)
        );
    });
}


const momentsNavbar =
    document.querySelector(".navbar");

function updateMomentsNavbar() {
    if (!momentsNavbar) {
        return;
    }

    momentsNavbar.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );
}

window.addEventListener(
    "scroll",
    updateMomentsNavbar,
    {
        passive: true
    }
);

window.addEventListener(
    "load",
    updateMomentsNavbar
);

updateMomentsNavbar();
renderMemoryAlbums();