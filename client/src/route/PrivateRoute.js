import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  console.log(<Outlet />);
  const location = useLocation();

  if (!isAuthenticated && !loading) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  } else if (loading) {
    return "";
  }
  return <Outlet />;
};

export default PrivateRoute;
