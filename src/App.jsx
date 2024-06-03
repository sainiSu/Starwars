import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShipList from './components/ShipList';
import HomePage from './components/HomePage';
import './App.css';

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
            <Link to="/">Log In</Link>
            <Link to="/">Sign Up</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/starships" element={<ShipList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
