import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShipDetail.css';

const ShipDetail = () => {
  const { shipId } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShip = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${shipId}/`);
        setShip(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShip();
  }, [shipId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ship-detail">
      <h2>{ship.name}</h2>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cost: {ship.cost_in_credits} credits</p>
      <p>Length: {ship.length} meters</p>
      <p>Crew: {ship.crew}</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Max Speed: {ship.max_atmosphering_speed}</p>
      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
      <p>Cargo Capacity: {ship.cargo_capacity}</p>
      <p>Consumables: {ship.consumables}</p>
      <div>Image: {ship.image}</div>
    </div>
  );
};

export default ShipDetail;
