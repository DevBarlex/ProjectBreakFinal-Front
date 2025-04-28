
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/auth'; // Cambia esto a tu backend

export const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const removeToken = () => {
  localStorage.removeItem('authToken');
};

export const decodeToken = (token) => {
  const jwtDecode = require('jwt-decode');
  return jwtDecode(token);
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    saveToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error en el login", error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Error en el registro", error);
    throw error;
  }
};

export const isTokenValid = (token) => {
  try {
    const decoded = decodeToken(token);
    return decoded.exp > Date.now() / 1000; 
  } catch (e) {
    return false;
  }
};
