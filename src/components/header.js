import React from "react";
import "./header.css";

import Logo from "../assets/Logo.svg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo-link" to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <Link to="#">
        <button className="header-button">Financeiro</button>
      </Link>
    </header>
  );
}
