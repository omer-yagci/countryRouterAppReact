import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

import ErrorPage from "./pages/ErrorPage";
import Continents from "./pages/Continents";
import { Details } from "./pages/Details";
import Context from "./components/Context";
import "./App.css";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:regionName" element={<Continents />} />
            <Route path="/:regionName/:countryName" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
