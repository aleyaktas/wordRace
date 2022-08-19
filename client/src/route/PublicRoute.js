import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store";

const PublicRoute = ({ redirectPath = "/profile" }) => {
  if (!localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default PublicRoute;
