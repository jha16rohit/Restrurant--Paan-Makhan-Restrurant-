import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

/* LAYOUT */
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

/* PAGES */
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
