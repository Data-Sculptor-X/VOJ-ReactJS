import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ForgotPassword } from "store/actions/General/authActions";
import { useNavigate } from "react-router-dom";
import { FiMail, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import "./ForgotPasswordComponent.css";
import { Link } from "react-router-dom";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await dispatch(ForgotPassword(email));
      console.log("Response:", response); // Debugging line
      setMessage("OTP sent to email successfully");
      setTimeout(() => {
        setMessage("");
        setLoading(false);
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log("Error:", error); // Debugging line
      setMessage(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="glassmorphic-form">
        <h2>Forgot Your Password?</h2>
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} onSubmit={handleSubmit}>
          <div className="input-container">
            <FiMail style = {{height:'30px'}} className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {message && (
          <div className="message">
            {message.includes("Error") ? (
              <FiAlertCircle className="error-icon" />
            ) : (
              <FiCheckCircle className="success-icon" />
            )}
            <p>{message}</p>
          </div>
        )}
        <Link to="/login">Go back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
