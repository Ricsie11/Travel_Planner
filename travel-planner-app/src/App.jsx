import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Itinerary from "./pages/Itinerary";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
