import React from 'react';
import Navbar from "./Navbar";
import HomeBody from './HomeBody';
import Bottom from './Bottom';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function Home () {
    return (
        <Layout style={{height:"100vh"}}>
        <Header style={{backgroundColor:"white"}}>
            <Navbar></Navbar>
        </Header>
        <Content style={{overflow:"auto"}}>
            <HomeBody></HomeBody>
        </Content>
        <Bottom></Bottom>
        </Layout>
    );
}

export default Home;