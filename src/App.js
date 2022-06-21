import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Calculator from "./pages/Calculator/Calculator";
import Home from "./pages/Home/Home";
import Summary from "./pages/ShowSummary/ShowSummary";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calculator" element={<Calculator />} />
            {/* Should need to enter with an unique id */}
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
