import axios from "axios";

function setupAuthorizationInterceptorLocal(instance) {
  instance.interceptors.request.use(function (config) {
    const token = localStorage.access_token || sessionStorage.access_token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
}

export const donHttps = axios.create({
  baseURL: process.env.REACT_APP_DON_BACK,
});

setupAuthorizationInterceptorLocal(donHttps); // Setup interceptor