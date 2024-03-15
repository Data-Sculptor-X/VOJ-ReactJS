import axios from "axios";

function setupAuthorizationInterceptorLocal(instance) {
  instance.interceptors.request.use(function (config) {
    const token = localStorage.access_token || sessionStorage.access_token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
}

export const iShalaHttps = axios.create({
  baseURL: process.env.REACT_APP_ICONTROL_URL,
});

setupAuthorizationInterceptorLocal(iShalaHttps);
