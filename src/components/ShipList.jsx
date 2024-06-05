import { useEffect, useState } from 'react';
import axios from 'axios';
import ShipItem from './ShipItem';
import '../styles/ShipList.css';

const ShipList = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setShips(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ship-list">
      {ships.map(ship => (
        <ShipItem key={ship.name} name={ship.name} model={ship.model} url={ship.url} />
      ))}
    </div>
  );
};

export default ShipList;
