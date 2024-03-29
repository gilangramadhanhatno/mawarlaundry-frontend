import LandingPage from "./pages/LandingPage";
import LaundrySatuan from "./pages/LaundrySatuan";
import LaundrySepatu from "./pages/LaundrySepatu";
import HargaLaundry from "./pages/HargaLaundry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/laundry-satuan" element={<LaundrySatuan />} />
        <Route path="/laundry-sepatu" element={<LaundrySepatu />} />
        <Route path="/harga-laundry" element={<HargaLaundry />} />
      </Routes>
    </Router>
  );
}

export default App;
