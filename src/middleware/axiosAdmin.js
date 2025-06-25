// lib/axiosAdmin.js 
import axios from 'axios';

const axiosAdmin = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosAdmin.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosAdmin;
