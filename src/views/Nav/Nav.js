import React from 'react';
import './Nav.scss';

import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink to="/" activeclassName="active" exact>
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeclassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeclassName="active">
                    Users
                </NavLink>
            </div>
        );
    }
}

export default Nav;
