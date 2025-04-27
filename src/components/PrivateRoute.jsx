// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken, isTokenValid } from '../utils/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const token = getToken();

  // Si no hay token o es inválido, redirige al login
  if (!token || !isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  // Si el token es válido, renderiza el componente
  return element;
};

export default PrivateRoute;
