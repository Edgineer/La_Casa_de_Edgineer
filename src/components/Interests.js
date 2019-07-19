import React from 'react';
import Temp from '../styled-components/Temp.style';
import Navbar from './Navbar';
import Bottom from './Bottom';
import { Layout, Spin } from 'antd';
const { Header, Content } = Layout;

function Interests () {
    return(
        <Layout style={{height:"100vh"}}>
        <Header style={{backgroundColor:"white"}}>
            <Navbar></Navbar>
        </Header>
        <Content style={{overflow:"auto"}}>
            <Temp>
            <Spin size="large"></Spin>
            <p>Working on developing this part of the page!</p>
            </Temp>
        </Content>
        <Bottom style={{position:"absoulte", Bottom:"0px"}}></Bottom>
        </Layout>
    );
}

export default Interests;