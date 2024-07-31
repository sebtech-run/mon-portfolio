import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header__nav-link-home" >
       Accueil
      </NavLink>

      <NavLink to="/competences" className="nav-header__nav-link-contact">
        Compétences
      </NavLink>

      <NavLink to="/portfolio" className="nav-header__nav-link-portfolio">
        Portfolio
      </NavLink>

      <NavLink to="/contact" className="nav-header__nav-link-contact">
        Contact
      </NavLink>
    </nav>
    );
};

export default Nav;