import React,{user} from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const ProtectRoute = ({ children, role }) => {
  
  const {user} = useContext(UserContext)

  if (!user.name) {
    return <Navigate to="/login" />;
  }

  if (role === "doctor" && !user.isDoctor) {
    return <Navigate to="/" />;
  }

  if (role === "patient" && user.isDoctor) {
    return <Navigate to="/" />;
  }

  return children;
};
