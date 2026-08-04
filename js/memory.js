const memoryHeroImage =
    document.getElementById("memoryHeroImage");
    
const memoryTitle =
    document.getElementById("memoryTitle");

const memoryDate =
    document.getElementById("memoryDate");

const memoryPlaceCount =
    document.getElementById("memoryPlaceCount");

const memoryNotes =
    document.getElementById("memoryNotes");

const autosaveMessage =
    document.getElementById("autosaveMessage");

const photoUpload =
    document.getElementById("photoUpload");

const memoryPhotoGrid =
    document.getElementById("memoryPhotoGrid");

const photoEmptyState =
    document.getElementById("photoEmptyState");

const ratingButtons =
    document.querySelectorAll(
        "#ratingButtons button")
        

const favouritePlace =
    document.getElementById("favouritePlace");

const favouriteMoment =
    document.getElementById("favouriteMoment");

const memoryListForm =
    document.getElementById("memoryListForm");

const memoryListInput =
    document.getElementById("memoryListInput");

const memoryList =
    document.getElementById("memoryList");

const memoryListEmpty =
    document.getElementById("memoryListEmpty");


function getSelectedJourney() {
    try {
        return JSON.parse(
            localStorage.getItem(
                "atelierSelectedMemory"
            )
        );
    } catch (error) {
        console.error(
            "Could not load selected memory:",
            error
        );

        return null;
    }
}


function getDestinationName(journey) {
    if (!journey) {
        return "Your journey";
    }

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

    if (journey?.destination?.image) {
        return journey.destination.image;
    }

    return "assets/images/morocco.jpg";
}


function formatMemoryDate(dateValue) {
    if (!dateValue) {
        return "Saved journey";
    }

    const date =
        new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "Saved journey";
    }

    return date.toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


function createMemoryStorageKey(journey) {
    const destination =
        getDestinationName(journey)
            .toLowerCase()
            .replace(/\s+/g, "-");

    const savedAt =
        journey?.savedAt ||
        journey?.createdAt ||
        "journey";

    return `atelierMemory-${destination}-${savedAt}`;
}


const selectedJourney =
    getSelectedJourney();

const memoryStorageKey =
    createMemoryStorageKey(
        selectedJourney
    );


function getMemoryData() {
    try {
        const storedData =
            JSON.parse(
                localStorage.getItem(
                    memoryStorageKey
                )
            );

        return storedData || {
            notes: "",
            photos: [],
            rating: 0,
            favouritePlace: "",
            favouriteMoment: "",
            details: []
        };
    } catch (error) {
        console.error(
            "Could not load memory data:",
            error
        );

        return {
            notes: "",
            photos: [],
            rating: 0,
            favouritePlace: "",
            favouriteMoment: "",
            details: []
        };
    }
}


let memoryData =
    getMemoryData();


function saveMemoryData() {
    localStorage.setItem(
        memoryStorageKey,
        JSON.stringify(memoryData)
    );
}


function populateMemoryHeader() {
    const destination =
        getDestinationName(
            selectedJourney
        );

    const image =
        getJourneyImage(
            selectedJourney
        );

    const numberOfPlaces =
        selectedJourney?.activities?.length || 0;

    if (memoryTitle) {
        memoryTitle.textContent =
            destination;
    }

    if (memoryHeroImage) {
        memoryHeroImage.src =
            image;

        memoryHeroImage.alt =
            destination;
    }

    if (memoryDate) {
        memoryDate.textContent =
            formatMemoryDate(
                selectedJourney?.savedAt ||
                selectedJourney?.createdAt
            );
    }

    if (memoryPlaceCount) {
        memoryPlaceCount.textContent =
            `${numberOfPlaces} ${numberOfPlaces === 1
                ? "place"
                : "places"
            }`;
    }
}


function showAutosaveMessage() {
    if (!autosaveMessage) {
        return;
    }

    autosaveMessage.textContent =
        "Saving...";

    window.clearTimeout(
        showAutosaveMessage.timeout
    );

    showAutosaveMessage.timeout =
        window.setTimeout(() => {
            autosaveMessage.textContent =
                "Saved automatically";
        }, 700);
}


function renderRating() {
    ratingButtons.forEach(
        (button) => {
            const rating =
                Number(
                    button.dataset.rating
                );

            button.classList.toggle(
                "active",
                rating <= memoryData.rating
            );
        }
    );
}


function createPhotoCard(
    photo,
    index
) {
    const card =
        document.createElement("article");

    card.className =
        "memory-photo-card";

    card.innerHTML = `
        <div class="memory-photo-paper">

            <img
                src="${photo}"
                alt="Personal memory photograph"
            >

            <button
                type="button"
                class="remove-memory-photo"
                aria-label="Remove photograph"
            >
                ×
            </button>

        </div>
    `;

    const removeButton =
        card.querySelector(
            ".remove-memory-photo"
        );

    removeButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();

            memoryData.photos.splice(
                index,
                1
            );

            saveMemoryData();
            renderPhotos();
        }
    );

    return card;
}


function renderPhotos() {
    if (
        !memoryPhotoGrid ||
        !photoEmptyState
    ) {
        return;
    }

    memoryPhotoGrid
        .querySelectorAll(
            ".memory-photo-card"
        )
        .forEach((card) => {
            card.remove();
        });

    if (
        memoryData.photos.length === 0
    ) {
        photoEmptyState.style.display =
            "flex";

        return;
    }

    photoEmptyState.style.display =
        "none";

    memoryData.photos.forEach(
        (photo, index) => {
            memoryPhotoGrid.appendChild(
                createPhotoCard(
                    photo,
                    index
                )
            );
        }
    );
}


function readImageFile(file) {
    return new Promise(
        (resolve, reject) => {
            const reader =
                new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = () => {
                reject(
                    new Error(
                        "Could not read image."
                    )
                );
            };

            reader.readAsDataURL(file);
        }
    );
}


async function handlePhotoUpload(event) {
    const files =
        Array.from(
            event.target.files || []
        );

    if (files.length === 0) {
        return;
    }

    const imageFiles =
        files.filter((file) => {
            return file.type.startsWith(
                "image/"
            );
        });

    try {
        const uploadedPhotos =
            await Promise.all(
                imageFiles.map(
                    readImageFile
                )
            );

        memoryData.photos.push(
            ...uploadedPhotos
        );

        saveMemoryData();
        renderPhotos();

    } catch (error) {
        console.error(
            "Could not upload photographs:",
            error
        );
    }

    photoUpload.value = "";
}


function renderMemoryList() {
    if (
        !memoryList ||
        !memoryListEmpty
    ) {
        return;
    }

    memoryList.innerHTML = "";

    if (
        memoryData.details.length === 0
    ) {
        memoryListEmpty.style.display =
            "block";

        return;
    }

    memoryListEmpty.style.display =
        "none";

    memoryData.details.forEach(
        (detail, index) => {
            const item =
                document.createElement("li");

            item.className =
                "memory-list-item";

            item.innerHTML = `
                <span>
                    ${detail}
                </span>

                <button
                    type="button"
                    class="memory-list-remove"
                    aria-label="Remove detail"
                >
                    ×
                </button>
            `;

            const removeButton =
                item.querySelector(
                    ".memory-list-remove"
                );

            removeButton.addEventListener(
                "click",
                () => {
                    memoryData.details.splice(
                        index,
                        1
                    );

                    saveMemoryData();
                    renderMemoryList();
                }
            );

            memoryList.appendChild(
                item
            );
        }
    );
}


function populateSavedMemory() {
    if (memoryNotes) {
        memoryNotes.value =
            memoryData.notes;
    }

    if (favouritePlace) {
        favouritePlace.value =
            memoryData.favouritePlace;
    }

    if (favouriteMoment) {
        favouriteMoment.value =
            memoryData.favouriteMoment;
    }

    renderRating();
    renderPhotos();
    renderMemoryList();
}


if (memoryNotes) {
    memoryNotes.addEventListener(
        "input",
        () => {
            memoryData.notes =
                memoryNotes.value;

            saveMemoryData();
            showAutosaveMessage();
        }
    );
}


if (photoUpload) {
    photoUpload.addEventListener(
        "change",
        handlePhotoUpload
    );
}


ratingButtons.forEach(
    (button) => {
        button.addEventListener(
            "click",
            () => {
                memoryData.rating =
                    Number(
                        button.dataset.rating
                    );

                saveMemoryData();
                renderRating();
            }
        );
    }
);


if (favouritePlace) {
    favouritePlace.addEventListener(
        "input",
        () => {
            memoryData.favouritePlace =
                favouritePlace.value;

            saveMemoryData();
        }
    );
}


if (favouriteMoment) {
    favouriteMoment.addEventListener(
        "input",
        () => {
            memoryData.favouriteMoment =
                favouriteMoment.value;

            saveMemoryData();
        }
    );
}


if (
    memoryListForm &&
    memoryListInput
) {
    memoryListForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const detail =
                memoryListInput.value
                    .trim();

            if (!detail) {
                return;
            }

            memoryData.details.push(
                detail
            );

            saveMemoryData();

            memoryListInput.value = "";

            renderMemoryList();
        }
    );
}


populateMemoryHeader();
populateSavedMemory();