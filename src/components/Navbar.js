import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css'; 

function Navbar () {
    return (
        <Menu mode="horizontal">
        <Menu.Item key="home">
        <Link to="/">
            <Icon type="home"/>
            Home
        </Link>
        </Menu.Item>

        <Menu.Item key="about">
        <Link to="/about">
            <Icon type="user"/>
            About Me
        </Link>
        </Menu.Item>
        
        <Menu.Item key="portfolio">
        <Link to="/portfolio">
            <Icon type="appstore"/>
            Portfolio
        </Link>
        </Menu.Item>

        <Menu.Item key="interests">
        <Link to="/interests">
            <Icon type="smile"/>
            Interests
        </Link>
        </Menu.Item>
        </Menu>
    );
}
export default Navbar;