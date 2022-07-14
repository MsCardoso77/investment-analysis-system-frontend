import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Calculator from "./pages/Calculator/Calculator";
import Home from "./pages/Home/Home";
import Summary from "./pages/ShowSummary/ShowSummary";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<><Navbar /><Home /></>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/calculator" element={<><Navbar /><Calculator /></>} />
            {/* Should need to enter with an unique id */}
            <Route exact path="/summary" element={<Summary />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
