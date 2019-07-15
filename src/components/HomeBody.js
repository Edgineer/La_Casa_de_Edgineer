import React from 'react';
import MidStyle from '../styled-components/MidStyle';
import Profile from "../styled-components/Profile";
import profilepic from "../images/profile-circ.gif";
import resume from "../images/elopez-swe-resume.pdf";

import { Typography, Button } from 'antd';
const { Paragraph } = Typography;


const content = (
    <>
      <Paragraph>
        Edgar Lopez
      </Paragraph>
      <Paragraph>
        Aspiring Software Developer
      </Paragraph>
      <Paragraph>
        UCLA Computer Science Undergrad
      </Paragraph>
      <a href={resume} target="_blank" rel="noopener noreferrer">
      <Button type="primary" icon="download" size="large">
          Resume
      </Button>
      </a>
    </>
);

function HomeBody () {
    return (
    <MidStyle>
    <Profile
        src={profilepic}
        alt="Edgar Lopez Profile Picture"      
    />
    {content} 
    </MidStyle>
    );
}

export default HomeBody;