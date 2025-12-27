export function getItinerary() {
  return JSON.parse(localStorage.getItem("itinerary")) || [];
}

export function addToItinerary(item) {
  const current = getItinerary();
  localStorage.setItem("itinerary", JSON.stringify([...current, item]));
}

export function removeFromItinerary(item) {
    const current = getItinerary();
    localStorage.setItem(
        "itinerary",
        JSON.stringify([current.filter(i => i !== item)])
    )
}
