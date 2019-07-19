import React from 'react';
import NavBar from './Navbar';
import Bottom from './Bottom';
import PortfolioBody from './PortfolioBody.';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function Portfolio () {
    return(
        <Layout style={{height:"100vh"}}>
        <Header style={{backgroundColor:"white"}}>
            <NavBar></NavBar>
        </Header>
        <Content style={{overflow:"auto"}}>
            <PortfolioBody></PortfolioBody>
        </Content>
        <Bottom style={{position:"absoulte", Bottom:"0px"}}></Bottom>
        </Layout>
    );
}

export default Portfolio;