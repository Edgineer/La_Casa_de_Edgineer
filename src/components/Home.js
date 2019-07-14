import React from 'react';
import { Link } from "react-router-dom";
import Wrapper from '../styled-components/Wrapper';
import Header from './Header';
import Footer from '../styled-components/Footer';
import Grid from '../styled-components/Grid';
import ButtonRow from '../styled-components/ButtonRow';
import ButtonBoarder from '../styled-components/ButtonBoarder';
import Button from "../styled-components/Button";
import GithubIcon from "../images/icongithub.svg";
import stadium from '../images/stadium.png';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Wrapper background={stadium}>
            <Header></Header>
            <Grid>
            <ButtonRow>
                <ButtonBoarder left="left">
                    <Button>
                        <Link to="/about" 
                            style={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                        About Me
                        </Link>
                    </Button>
                </ButtonBoarder>
                <ButtonBoarder right="right">
                <Button>Portfolio</Button>
                </ButtonBoarder>
            </ButtonRow>
            <ButtonRow>
                <ButtonBoarder left="left">
                <a href='/../public/../elopez-swe-resume.pdf' target="_blank">
                <Button>Resume</Button>
                </a>
                </ButtonBoarder>
                <ButtonBoarder right="right">
                <Button>Interests</Button>
                </ButtonBoarder>
            </ButtonRow>
            </Grid>
            <Footer>
                <table>
                    <tr>
                        <td>
                            <Button>
                               <img src={GithubIcon} alt="Github"/> 
                            </Button>
                        </td>
                    </tr>
                </table>
            </Footer>
            </Wrapper>
        );
    }
}

//C:\Users\Edgineer\Documents\Side_Projects\La_Casa_de_Edgineer\src\components\Home.js
//C:\Users\Edgineer\Documents\Side_Projects\La_Casa_de_Edgineer\src\images\icongithub.svg