import "./Login.css";
import { Link } from "react-router-dom";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="login-card">

        {/* LEFT : LOGIN FORM */}
        <div className="login-form">
          <h2>Login</h2>

          {/* Username */}
          <div className="input-group">
            <input type="text" placeholder="Username" />
            <FaUser className="end-icon" />
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="end-icon clickable"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="login-btn">Login</button>

          <p className="signup-text">
            Don’t have an account?
            <Link to="/register" className="signup-link"> Sign Up</Link>
          </p>
        </div>

        {/* RIGHT : DIAGONAL PANEL */}
        <div className="login-welcome">
          <h1>
            WELCOME <br /> BACK
          </h1>
        </div>

      </div>
    </motion.div>
  );
};

export default Login;
