import '../styles/ShipItem.css';

const ShipItem = ({ name, model }) => {
  return (
    <div className="ship-item">
      <h2>{name}</h2>
      <p>{model}</p>
    </div>
  );
};

export default ShipItem;
