import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import { useCountryContext } from "./components/Context/Context";

import "./App.css";
import NotFound from "./pages/NotFound";
import Continents from "./pages/Continents";
import Details from "./pages/Details";

function App() {
  const { country } = useCountryContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/:regionName"
            element={<Continents country={country} />}
          />
          <Route
            path="/:regionName/:countryName"
            element={<Details country={country} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
