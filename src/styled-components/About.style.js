import styled from 'styled-components';

const AboutHeader = styled.div`
    text-align: center;
    font-family: 'Arial Narrow Bold', sans-serif;
    font-size: 52px;
    font-weight: 750;
    color: rgb(65,65,65);
    padding-left: 24px;
    padding-top: auto;
`;

const AboutSubheader = styled.div`
    text-align: left;
    font-family: Karla, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 450;
    color: rgb(65,65,65);
    padding-left: 24px;
    padding-top: auto;
`;

const AboutWrapper = styled.div`
    overflow:auto;
`;

const AboutPic = styled.img`
  float:center;
  display: block;
  max-width: 50%;
  max-height: 50%;
  width: auto;
  height: auto;
  padding-top: 24px;
  padding-left: 24px;
`;

export { AboutHeader, AboutSubheader, AboutWrapper, AboutPic};