import React from 'react';
import HeaderStyle from '../styled-components/HeaderStyle';
import Profile from "../styled-components/Profile";
import Title from '../styled-components/Title';
import profilepic from "../images/profile-circ.gif";

export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <Profile src={profilepic} alt="Profile-pic"/>
                <HeaderStyle>Edgar Lopez</HeaderStyle>
                <Title>Aspiring Software Engineer</Title>
                <Title>UCLA Computer Science June 2020</Title>
            </>
        );
    }
}