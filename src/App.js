import LandingPage from "./pages/LandingPage";
import LaundrySatuan from "./pages/LaundrySatuan";
import LaundrySepatu from "./pages/LaundrySepatu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/laundry-satuan" element={<LaundrySatuan />} />
        <Route path="/laundry-sepatu" element={<LaundrySepatu />} />
      </Routes>
    </Router>
  );
}

export default App;
