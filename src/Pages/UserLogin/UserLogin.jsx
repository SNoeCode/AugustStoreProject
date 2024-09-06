import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInputValue, setUserInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const verificationCode = "just example";
    if (userInputValue === verificationCode) {
      navigate("/");
      setErrorMessage("");
      setIsModalOpen(false);
      alert("Login Successful");
    } else {
      setErrorMessage("Invalid verification code.");
      alert("Please reenter the code.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUserInputValue("");
  };

  return (
    <div className="user-image-container">
      <div className="user-login-container">
        <h2
          style={{
            mt: "150px",
            color: "#C2181A",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          <b>Welcome Back! Please Login!</b>
        </h2>
        <form className="user-login-form" onSubmit={handleLogin}>
          <div className="user-form-group">
            <label>Username: </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
              value={username}
            />
          </div>
          <div className="user-form-group">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit" className="user-login-button">
            Login
          </button>

          <p className="user-sign-up">
            No Account?
            <a
              href="/sign-up"
              onClick={() => handleNavigation("/sign-up")}
              id="sign-up-hover"
            >
              <span>Sign up?</span>
            </a>
          </p>
        </form>
      </div>

      {isModalOpen && (
        <div className="user-modal">
          <div className="user-modal-content">
            <h2>Verification Required</h2>
            <h3>Please type in captcha to continue</h3>
            <label htmlFor="prompt-input">
              <div className="user-modal-img-container">
                <img src={"/Images/clipart-captcha-code-1-512x512-61ae.png"} />
              </div>
            </label>
            <input
              id="prompt-input"
              type="text"
              value={userInputValue}
              onChange={(e) => setUserInputValue(e.target.value)}
            />
            <div className="user-modal-buttons">
              <button onClick={handleConfirm} className="user-confirm-button">
                Confirm
              </button>
              <button onClick={handleCloseModal} className="user-cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <RemoveScrollBar />
    </div>
  );
};

export default UserLogin;
