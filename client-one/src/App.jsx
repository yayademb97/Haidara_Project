import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destinations />} />
        </Routes>
      </Router>
  );
}

export default App;
