import axios from "axios";

function setupAuthorizationInterceptorLocal(instance) {
  instance.interceptors.request.use(function (config) {
<<<<<<< HEAD
    const token = sessionStorage.getItem('access_token');
    config.headers.Authorization = token ? `JWT ${token}` : "";
=======
    const token = localStorage.access_token || sessionStorage.access_token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
>>>>>>> origin/main
    return config;
  });
}

<<<<<<< HEAD
export const donHttps = axios.create({
  baseURL: process.env.REACT_APP_DON_BACK,
});

setupAuthorizationInterceptorLocal(donHttps); // Setup interceptor
=======
export const iShalaHttps = axios.create({
  baseURL: process.env.REACT_APP_ICONTROL_URL,
});

setupAuthorizationInterceptorLocal(iShalaHttps);
>>>>>>> origin/main
