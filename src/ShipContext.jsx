import { createContext , useContext , useEffect , useState } from "react";
import axios from 'axios'

const ShipContext = createContext();

export const useShips = () => useContext(ShipContext); //custom hook for acesss the context easily

export const ShipProvider = ({ children }) => {
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  

    const fetchShips = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
          setShips(prevShips => [...prevShips, ...response.data.results]);
          setHasMore(response.data.next !== null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchShips();
      }, [page]);
      

      return (
        <ShipContext.Provider value={{ ships, loading, error, setPage, hasMore }}>
          {children}
        </ShipContext.Provider>
      );
    }      