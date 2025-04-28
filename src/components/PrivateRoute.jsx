import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken, isTokenValid } from '../utils/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const token = getToken();

  if (!token || !isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;
