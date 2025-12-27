export function getItinerary() {
    return JSON.parse(localStorage.getItem("itinerary")) || [];
}

export function addToItinerary(item) {
    const current = getItinerary();
    localStorage.setItem
}