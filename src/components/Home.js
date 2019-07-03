import React from 'react';
import Wrapper from '../styled-components/Wrapper';
import Header from './Header';
import Footer from '../styled-components/Footer';
import Grid from '../styled-components/Grid';
import ButtonRow from '../styled-components/ButtonRow';
import ButtonBoarder from '../styled-components/ButtonBoarder';
import Button from "../styled-components/Button";

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Wrapper>
            <Header></Header>
            <Grid>
            <ButtonRow>
                <ButtonBoarder left="left">
                <Button>About Me</Button>
                </ButtonBoarder>
                <ButtonBoarder right="right">
                <Button>Portfolio</Button>
                </ButtonBoarder>
            </ButtonRow>
            <ButtonRow>
                <ButtonBoarder left="left">
                <Button>Resume</Button>
                </ButtonBoarder>
                <ButtonBoarder right="right">
                <Button>Interests</Button>
                </ButtonBoarder>
            </ButtonRow>
            </Grid>
            <Footer>Here is where all the social media link icons go</Footer>
            </Wrapper>
        );
    }
}