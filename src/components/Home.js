import React from 'react';
import { Link } from "react-router-dom";
import NavBarStyle from "../styled-components/NavBar.style";
import Header from './Header';
import Footer from '../styled-components/Footer';
import Grid from '../styled-components/Grid';
import ButtonRow from '../styled-components/ButtonRow';
import ButtonBoarder from '../styled-components/ButtonBoarder';
import Button from "../styled-components/Button";
import GithubIcon from "../images/icongithub.svg";

function Home () {
    return (
        <>
        <NavBarStyle></NavBarStyle>
        <Header></Header>
        <Grid>
        <ButtonRow>
            <ButtonBoarder left="left">
                <Button>
                    <Link to="/about" 
                        style={{
                            fontWeight: "bold",
                            color: "black"
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
        </>
    );
}

export default Home;