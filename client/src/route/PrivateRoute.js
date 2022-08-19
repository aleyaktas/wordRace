import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  console.log(loading);
  console.log(isAuthenticated);

  const location = useLocation();

  if (loading === true || loading === null) {
    return null;
  } else if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  } else {
    return <Outlet />;
  }

  // if (!isAuthenticated && !loading) {
  //   return <Navigate to={redirectPath} replace state={{ from: location }} />;
  // } else if (loading || loading === null) {
  //   return "";
  // }
  // return <Outlet />;
};

export default PrivateRoute;
