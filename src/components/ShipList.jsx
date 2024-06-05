import { useShips } from '../ShipContext';
import ShipItem from './ShipItem';
import '../styles/ShipList.css';

const ShipList = () => {
  const { ships, loading, error, setPage, hasMore } = useShips();

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="ship-list">
      {ships.map(ship => (
        <ShipItem key={ship.url} name={ship.name} model={ship.model} url={ship.url} />
      ))}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {hasMore && !loading && (
        <button onClick={handleLoadMore} className="load-more">
          View More
        </button>
      )}
    </div>
  );
};

export default ShipList;
