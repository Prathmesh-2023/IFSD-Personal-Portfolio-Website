// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  try {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    if (info?.token) config.headers.Authorization = `Bearer ${info.token}`;
  } catch {}
  return config;
});

export default api;
