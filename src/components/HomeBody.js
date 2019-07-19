import React from 'react';
import {HomeHeader, HomeSubheader, HomeWrapper, Downloader, ProfilePic} from '../styled-components/Home.style';
import profilepic from "../images/profile-circ.gif";
import resume from "../images/elopez-swe-resume.pdf";
import { Row, Col, Button } from 'antd';

function HomeBody () {
    return (
    <HomeWrapper>
      <Row>
        <Col span={16}>
          <Row justify="center">
            <HomeHeader>Edgar Lopez</HomeHeader>
            <HomeSubheader>
              Software Developer in training
              <br></br>
              Rising Senior at UCLA Computer Science 
            </HomeSubheader>
          </Row>
        </Col>
        <Col span={8}>
          <ProfilePic src={profilepic} alt="Edgar Lopez Profile Picture"/>
        </Col>
      </Row>
      <Row type="flex" align="bottom">
        <Col span={8}>
            <Downloader href={resume} target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon="download" size="large">
                Resume
              </Button>
            </Downloader>
        </Col>
      </Row>
    </HomeWrapper>
    );
}

export default HomeBody;