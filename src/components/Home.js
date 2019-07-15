import React from 'react';
import NavBar from "./Navbar";
import HomeBody from './HomeBody';
import Bottom from './Bottom';

import { Layout } from 'antd';

const { Content } = Layout;



function Home () {
    return (
    <Layout style={{height:"100vh"}}>
        <NavBar></NavBar>
        <Content>
            <HomeBody></HomeBody>
        </Content>
        <Bottom></Bottom>
    </Layout>
    );
}

export default Home;