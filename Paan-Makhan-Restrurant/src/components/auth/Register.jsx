import "./Register.css";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="register-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="register-card">

        {/* LEFT : WELCOME PANEL */}
        <div className="register-welcome">
          <h1>WELCOME</h1>
        </div>

        {/* RIGHT : REGISTER FORM */}
        <div className="register-form">
          <h2>Register</h2>

          {/* Username */}
          <div className="input-group">
            <input type="text" placeholder="Username" />
            <FaUser className="end-icon" />
          </div>

          {/* Email */}
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <FaEnvelope className="end-icon" />
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

          <button className="register-btn">Register</button>

          <p className="signin-text">
            Already have an account?
            <Link to="/login" className="signin-link"> Login</Link>
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Register;
