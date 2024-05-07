import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ component: Component }) => {
  const [token] = useState(localStorage.getItem("_token"));

  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
