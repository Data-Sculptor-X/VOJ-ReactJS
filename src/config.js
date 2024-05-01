import axios from "axios";

function setupAuthorizationInterceptorLocal(instance) {
  instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('access_token');
    config.headers.Authorization = token ? `JWT ${token}` : "";
    return config;
  });
}

export const donHttps = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

setupAuthorizationInterceptorLocal(donHttps); // Setup interceptor