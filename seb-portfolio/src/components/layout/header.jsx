import React from 'react';
import Nav from './navbar';

const Header = () => {
    return (
        <header className="header">
            <h2 className='header__title'><span>bouillet</span> sébastien</h2>
        {/* <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </figure> */}
        <Nav className="nav-header" />
      </header>
       
    );
};

export default Header;