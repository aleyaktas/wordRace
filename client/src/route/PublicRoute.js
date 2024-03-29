import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ redirectPath = "/rooms" }) => {
  if (!localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default PublicRoute;
