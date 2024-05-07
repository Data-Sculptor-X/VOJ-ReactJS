import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VerifyEmail } from 'store/actions/General/authActions';
import '../ForgotPassword/ForgotPasswordComponent.css'; // Import your CSS file

const VerifyUserEmail = () => {
  const [sso, setSso] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSso(params.get('sso'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear the message
    try {
      const result = await dispatch(VerifyEmail({ sso }));
      if (result.success) {
        setMessage('Your Email has been Verified Successfully');
      } else {
        setMessage(`Failed Email Verification: ${result.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Email Verification</h2>
        <p>{message}</p>
        <button type="submit">Verify Email</button>
      </form>
    </div>
  );
};

export default VerifyUserEmail;
