import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* LAYOUT */
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

/* PAGES */
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Preloader from "./components/Preloader/Preloader";

/* AUTH */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Hide navbar & footer on auth pages
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/accounts";

  // Preloader logic (initial load only)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  // Show preloader
  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {!isAuthPage && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accounts" element={<Login />} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
