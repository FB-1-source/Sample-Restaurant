import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="footer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>&copy; Copyright {year}</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
