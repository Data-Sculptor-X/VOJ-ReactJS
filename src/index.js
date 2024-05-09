import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-pro-react.scss?v1.2.1";
import LoginApp from "components/Login/LoginApp";
import AdminLayout from "layouts/Admin.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import MasterAdmin from "layouts/MasterAdmin";
import ForgotPasswordComponent from "components/ForgotPassword/ForgotPassword";
import ResetPassword from "components/ForgotPassword/ResetPassword";
import VerifyUserEmail from "components/Verify Email/VerifyEmail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        {/* <Route path="/auth/*" element={<AuthLayout />} /> */}
        <Route path="/voj/*" element={<MasterAdmin />} />
        <Route path="/userforgotpassword" element={<ForgotPasswordComponent />} />
        <Route path="/verifypassword" element={<ResetPassword />} />
        <Route path="/verifyEmail" element={<VerifyUserEmail />} />
        
        {/* <Route path="/login" element={<GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
                                        <LoginApp />
                                      </GoogleOAuthProvider>}/> */}
        <Route path="/login" element={<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                                        <LoginApp />
                                      </GoogleOAuthProvider>}/>
        {/* <Route path="/home" element={<Homepage />} />  */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
