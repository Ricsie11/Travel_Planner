import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Navbar from "./components/Navbar";
import Itinerary from "./pages/Itinerary";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
