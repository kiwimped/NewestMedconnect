import React from "react";
import { Link } from "react-router-dom";
import { User } from "phosphor-react";
import { Bell } from "phosphor-react";
import { House } from "phosphor-react";
import { FirstAidKit } from "phosphor-react";
import { Robot } from "phosphor-react";

import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/doctor">Doctor</Link>
        <Link to="/">
          <House size={32} />
        </Link>
        <Link to="/notify">
          <Bell size={32} />
        </Link>
        <Link to="/account">
          <User size={32} />
        </Link>
        <Link to="/appointments">
          <FirstAidKit size={32} />
        </Link>
        <Link to="/AI">
          <Robot size={32} />
        </Link>

        <Link to="/loginNEW">Login</Link>
        <Link to="/logout">Logout</Link>

      </div>
    </div>
  );
};
