import React from 'react';
import './index.css'; 
import CartWidget from './CartWidget';  
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
   
    <NavLink to="/" className="header__link">
      <h1>Mi Tienda Online</h1>
    </NavLink>
      <div className="navItems">
      <NavLink viewTransition to="/" className="header__link">Home</NavLink>
      <NavLink viewTransition to="/categorias/perfumes" className="header__link">Perfumes</NavLink>
        <NavLink viewTransition to="/categorias/comida" className="header__link">Comida</NavLink>
        <NavLink viewTransition to="/categorias/muebles" className="header__link">Muebles</NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;


