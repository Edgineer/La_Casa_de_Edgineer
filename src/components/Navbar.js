import React from 'react';
import { Nav, NavItem} from "shards-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function Navbar () {
    return (
        <Nav justified>
        <NavItem>
            <Link to="/"> Home </Link>
        </NavItem>
        <NavItem>
            <Link to="/about"> About Me </Link>
        </NavItem>
        <NavItem>
            <Link to="/portfolio"> Portfolio </Link>
        </NavItem>
        <NavItem>
            <Link to="/interests"> Interests </Link>
        </NavItem>
    </Nav>
    );
}

export default Navbar;