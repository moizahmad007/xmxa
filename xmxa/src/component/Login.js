import React, { useState } from "react";
import "./Login.css";  // Add styles specific to Login

const Login = ({ isOpen, toggleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Logging in with", email, password);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log("Resetting password for", resetEmail);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="overlay" onClick={toggleLogin}></div>

          {/* Login Content */}
          <div className="login-container">
            <div className="login-header">
              <h2>{isForgotPassword ? "Reset Password" : "Login"}</h2>
              <button className="close-btn" onClick={toggleLogin}>✖</button>
            </div>
            <form
              onSubmit={isForgotPassword ? handlePasswordReset : handleLogin}
              className="login-form"
            >
              {isForgotPassword ? (
                <>
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="login-btn">Reset Password</button>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                   <p className="forgot-password" onClick={() => setIsForgotPassword(true)}>
                    Forgot Password?
                  </p>
                  <button type="submit" className="login-btn">Login</button>
                </>
              )}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
