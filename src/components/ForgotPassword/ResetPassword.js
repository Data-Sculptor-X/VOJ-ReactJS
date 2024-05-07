import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VerifyForgotPassword } from 'store/actions/General/authActions';
import './ResetPassword.css'; // Import your CSS file

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [sso, setSso] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSso(params.get('sso'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (timer <= 0) {
      setMessage('OTP expired');
      return;
    }
    try {
      await dispatch(VerifyForgotPassword({ otp, password: newPassword, sso }));
      setMessage('Password has been reset successfully. You can now login with the new password.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="glassmorphic-form">
      <h2>Forgot Your Password?</h2>
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit">Reset Password</button>
        </form>
        {timer > 0 ? <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p> : <p className="expired">OTP expired</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
