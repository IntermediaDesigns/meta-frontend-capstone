import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import "./index.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Orderonline from "./pages/Orderonline";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <LandingPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
