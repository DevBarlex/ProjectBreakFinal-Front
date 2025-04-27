// src/utils/auth.js

import axios from 'axios';

// URL de tu backend para las peticiones de autenticación
const apiUrl = 'http://localhost:3000/api/auth'; // Cambia esto a tu backend

// Guardar el token en localStorage
export const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Obtener el token desde localStorage
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Eliminar el token (cuando el usuario cierre sesión)
export const removeToken = () => {
  localStorage.removeItem('authToken');
};

// Decodificar el token (esto puede ser útil para extraer la información del usuario)
export const decodeToken = (token) => {
  const jwtDecode = require('jwt-decode');
  return jwtDecode(token);
};

// Hacer una petición de inicio de sesión
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    saveToken(response.data.token); // Guardar el token en localStorage
    return response.data;
  } catch (error) {
    console.error("Error en el login", error);
    throw error;
  }
};

// Hacer una petición de registro (si es necesario)
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Error en el registro", error);
    throw error;
  }
};

// Verificar si el token es válido (esto se puede hacer usando jwt-decode)
export const isTokenValid = (token) => {
  try {
    const decoded = decodeToken(token);
    return decoded.exp > Date.now() / 1000; // Si la fecha de expiración es mayor que el tiempo actual
  } catch (e) {
    return false;
  }
};
