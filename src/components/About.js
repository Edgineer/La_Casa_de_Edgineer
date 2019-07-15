import React from 'react';

import Navbar from './Navbar';
import Bottom from './Bottom';
import { Layout, Spin } from 'antd';
import Temp from '../styled-components/Temp.style';
const { Content } = Layout;


function About () {
    return(
    <Layout style={{height:"100vh"}}>
        <Navbar></Navbar>
        <Content>
            <Temp>
            <Spin size="large"></Spin>
            <p>Working on developing this part of the page!</p>
            </Temp>
        </Content>
        <Bottom></Bottom>
    </Layout>
    );
}
export default About;