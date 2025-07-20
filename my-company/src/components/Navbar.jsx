import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: '#282c34',
    padding: '1rem',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
};

const activeStyle = {
    textDecoration: 'underline',
};

const Navbar = () => {
    return (
        <nav style={navStyle}>
            <NavLink to="/" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
                Home
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
                About
            </NavLink>
            <NavLink to="/services" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
                Services
            </NavLink>
            <NavLink to="/contact" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
                Contact
            </NavLink>
        </nav>
    );
};

export default Navbar;
