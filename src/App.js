import React from 'react';
import Sound from 'react-sound';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import Grid from './components/Grid';
import ButtonRow from './components/ButtonRow';
import ButtonBoarder from './components/ButtonBoarder';
import Button from "./components/Button";

function App() {
  return (
    <Wrapper>
      <Header>Edgar Lopez</Header>
      <Title>Aspiring Software Engineer</Title>
      <Title>UCLA Computer Science June 2020</Title>
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

export default App;