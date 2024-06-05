import { Link } from 'react-router-dom';
import '../styles/ShipItem.css';

const ShipItem = ({ name, model, url }) => {
  if (!url) {
    return null; // or some fallback UI
  }

  const shipId = url.split('/').filter(Boolean).pop();

  return (
    <div className="ship-item">
      <Link to={`/starships/${shipId}`}>
        <h2>{name}</h2>
        <p>{model}</p>
      </Link>
    </div>
  );
};

export default ShipItem;
