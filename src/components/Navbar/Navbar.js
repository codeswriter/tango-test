import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = props => (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mr-auto mr-lg-0">TangoSource <strong>TestApp</strong></Link>
    </nav>
);