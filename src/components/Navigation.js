import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/Shop" activeClassName="nav-active">
                Boutique
            </NavLink>
            <NavLink exact to="/Contact" activeClassName="nav-active">
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;