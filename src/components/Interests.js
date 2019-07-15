import React from 'react';
import Temp from '../styled-components/Temp.style';
import Navbar from './Navbar';
import Bottom from './Bottom';
import { Layout, Spin } from 'antd';
const { Content } = Layout;

function Interests () {
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

export default Interests;