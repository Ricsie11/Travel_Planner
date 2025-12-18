import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCityDetails } from "../services/opentripmap";

function Destination() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCity() {
      try {
        const data = await getCityDetails(id);
        setCity(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCity();
  }, [id]);

  if (loading) return <p>Loading destination...</p>;

  if (!city) return <p>Destination not found</p>;

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">{city.name}</h1>
      <p className="text-gray-600">Country: {city.country}</p>
      <p className="text-gray-600">
        {" "}
        Coordinates: {city.lat}, {city.lon}
      </p>
    </div>
  );
}

export default Destination;
