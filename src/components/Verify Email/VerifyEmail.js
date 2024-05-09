import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { VerifyEmail } from "store/actions/General/authActions";
import "../ForgotPassword/ForgotPasswordComponent.css"; // Import your CSS file
import { Link } from "react-router-dom";

const VerifyUserEmail = () => {
  const [sso, setSso] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSso(params.get("sso"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(VerifyEmail({ sso }));
      setMessage("Your Email has been Verified Successfully");
      setTimeout(() => setMessage(""), 4000); // Clear message after 10 seconds
    } catch (error) {
      setMessage(
        "Your Email has not been Verified Successfully, Please contact our support team"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Email Verification</h2>
        <button type="submit" disabled={loading} className="verify-button">
          {loading ? "Verifying..." : "Verify Email"}
        </button>
        {message && (
          <p className="message">{message}</p>
        )}
        <Link to="/login" style={{ color: "red" }}>
          Go to Login
        </Link>{" "}
        {/* Add this line */}
      </form>
    </div>
  );
};

export default VerifyUserEmail;
