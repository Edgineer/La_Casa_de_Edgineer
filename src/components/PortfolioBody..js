import React from 'react';
import { PortfolioWrapper } from '../styled-components/Portfolio.style';
import ccipic from '../images/cci.png';
import gliapic from '../images/glia.jpg';
import adobepic from '../images/adobe.png';
import nasapic from '../images/nasa.png';
import parkingpic from '../images/parking.jpg';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

function PortfolioBody () {
    return (
    <PortfolioWrapper>
      <Row>
        <Col span={6} offset={4}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="glia" src={gliapic}/>}
            >
                <Meta title="Glia" description="Gratitude Journal"/>
            </Card>
        </Col>
        <Col span={6} offset={0}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="teacher" src={ccipic}/>}
            >
                <Meta title="Tech Interview Prep" description="Interview Readiness Lessons"/>
            </Card>
        </Col>

        <Col span={6} offset={0}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="adobe" src={adobepic}/>}
            >
                <Meta title="Full Stack Internship" description="SEO and Landing Pages"/>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={4}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="nasa" src={nasapic}/>}
            >
                <Meta title="SWE" description="Refactoring"/>
            </Card>
        </Col>
        <Col span={6} offset={0}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="parking" src={parkingpic}/>}
            >
                <Meta title="LA Parking Tickets" description="Help Avoid"/>
            </Card>
        </Col>
      </Row>

    </PortfolioWrapper>
    );
}

export default PortfolioBody;