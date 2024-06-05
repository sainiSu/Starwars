import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShipList from './components/ShipList';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';
import ShipDetail from './components/ShipDeatil';
import { ShipProvider } from './ShipContext';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG23.png" alt="Star Wars Logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/starships" className="starships-link"> Starships</Link>
          </nav>
          <div className="login-signup">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </header>
        <main>
          <ShipProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/starships" element={<ShipList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/starships/:shipId" element={<ShipDetail />} />
          </Routes>
          </ShipProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
