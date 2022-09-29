import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading === true || loading === null) {
    return null;
  } else if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
