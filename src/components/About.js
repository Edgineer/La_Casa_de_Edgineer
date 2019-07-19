import React from 'react';
import Navbar from './Navbar';
import Bottom from './Bottom';
import AboutBody from "./AboutBody";
import { Layout } from 'antd';
const { Header, Content } = Layout;


function About () {
    return(
        <Layout style={{height:"100vh"}}>
            <Header style={{backgroundColor:"white"}}>
                <Navbar></Navbar>
            </Header>
            <Content style={{overflow:"auto"}}>
                <AboutBody></AboutBody>
            </Content>
        <Bottom></Bottom>
        </Layout>
    );
}
export default About;