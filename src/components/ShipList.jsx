import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips } from '../features/ships/shipsSlice';
import ShipItem from './ShipItem';
import '../styles/ShipList.css';

const ShipList = () => {
  const dispatch = useDispatch();
  const ships = useSelector((state) => state.ships.ships);
  const status = useSelector((state) => state.ships.status);
  const error = useSelector((state) => state.ships.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShips());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = ships.map((ship) => (
      <ShipItem key={ship.name} name={ship.name} model={ship.model} />
    ));
  } else if (status === 'failed') {
    console.error('Error:', error);
    content = <div>{error}</div>;
  }

  return (
    <div className="ship-list">
      {content}
    </div>
  );
};

export default ShipList;
