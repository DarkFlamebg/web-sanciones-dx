import './App.css';
import Navbar from './components/Navbar.jsx';
import Landingpage from './pages/Landingpage.jsx';
import SancionesPage from './pages/SancionesPage.jsx'; // Importa la página de sanciones
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar persistente en todas las rutas */}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sanciones" element={<SancionesPage />} />
          {/* Puedes agregar más rutas conforme sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
