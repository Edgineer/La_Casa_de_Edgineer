import React from 'react';
import HomePath from "../styled-components/HomePath";
import HomeIcon from "../images/iconhome.svg";
import Title from '../styled-components/Title';
import Home from './Home';

export default class About extends React.Component {
    constructor(props){
        super(props);
        
        this.renderHome = this.renderHome.bind(this);
        this.myalert = this.myalert.bind(this);
    }

    renderHome(){return(<Home></Home>);}
    myalert(){alert("yo mama");}

    render() {
        return(
            <>
                <HomePath type="submit" homeicon={HomeIcon} onClick={this.myalert}/>
            <Title>
                About Me
            </Title>
            </>
        )
    }
}