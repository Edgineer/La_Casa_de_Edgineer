import styled from 'styled-components';

const HomeHeader = styled.div`
    text-align: left;
    font-family: 'Arial Narrow Bold', sans-serif;
    font-size: 72px;
    font-weight: 750;
    color: rgb(65,65,65);
    padding-left: 64px;
    padding-top: auto;
`;

const HomeSubheader = styled.div`
    text-align: left;
    font-family: Karla, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 650;
    color: rgb(65,65,65);
    padding-left: 64px;
    padding-top: auto;
`;

const HomeWrapper = styled.div`
    overflow:auto;
`;

const Downloader = styled.a`
    padding-left: 120px;
`;

const ProfilePic = styled.img`
  float:right;
  display: block;
  max-width: 50%;
  max-height: 50%;
  width: auto;
  height: auto;
`;

export {HomeHeader, HomeSubheader, HomeWrapper, Downloader, ProfilePic};