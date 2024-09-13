import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Reservations } from "./pages/Reservations";
import { About } from "./pages/About";
import "./index.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <LandingPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
