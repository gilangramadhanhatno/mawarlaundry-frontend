import LandingPage from "./pages/LandingPage";
import LaundrySatuan from "./pages/LaundrySatuan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/paket"> */}
        <Route path="/laundry-satuan" element={<LaundrySatuan />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
