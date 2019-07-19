import React from 'react';
import { AboutWrapper, AboutHeader, AboutSubheader, AboutPic } from '../styled-components/About.style';
import aboutpic from "../images/profile-circ.gif";
import { Row, Col } from 'antd';

import { ABOUT_TITLE, ABOUT_INTRO, ABOUT_PAR1, ABOUT_PAR2 } from '../constants';

function AboutBody () {
    return (
    <AboutWrapper>
      <Row>
        <Col span={8}>
          <AboutPic src={aboutpic} alt="Edgar Lopez Profile Picture"/>
        </Col>
        <Col span={16}>
            <AboutHeader> {ABOUT_TITLE} </AboutHeader>
            <AboutSubheader>{ABOUT_INTRO}</AboutSubheader>
            <br></br>
            <AboutSubheader>{ABOUT_PAR1}</AboutSubheader>
            <br></br>
            <AboutSubheader>{ABOUT_PAR2}</AboutSubheader>
        </Col>
      </Row>
    </AboutWrapper>
    );
}

export default AboutBody;