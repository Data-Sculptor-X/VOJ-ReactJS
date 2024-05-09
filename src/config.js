import axios from "axios";

function setupAuthorizationInterceptorLocal(instance) {
  instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('access_token');
    config.headers.Authorization = token ? `JWT ${token}` : "";
    return config;
  });
}

export const Interceptor = axios.create({
  baseURL: process.env.REACT_APP_BACKEND
});

setupAuthorizationInterceptorLocal(Interceptor); // Setup interceptor