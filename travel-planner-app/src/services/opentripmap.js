const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.opentripmap.com/0.1/en/places";

export async function getCityDetails(city) {
  const res = await fetch(`${BASE_URL}/geoname?name=${city}&apikey=${API_KEY}`);
  return res.json();
}

export async function getAttractions(lat, lon) {
  const res = await fetch(
    `${BASE_URL}/radius?radius=5000&lon=${lon}&lat=${lat}&limit=12&apikey=${API_KEY}`
  );
  return res.json();
}
