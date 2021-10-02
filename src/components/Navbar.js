import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
  });

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            Logo
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <a href="badges.html">Contact us</a>
            </li>
            <li>
              <a href="collapsible.html">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <a href="badges.html">Contact us</a>
        </li>
        <li>
          <a href="collapsible.html">Pricing</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
