import React from 'react';
import { NavLink } from "react-router-dom";

const FlecheReturn = () => {
    return (
        <div className="fleche-return">

      <NavLink to="/portfolio" className="fleche-return_icon" >
      <i className="fa-solid fa-arrow-left"></i>
      </NavLink>



          
        </div>
    );
};

export default FlecheReturn;