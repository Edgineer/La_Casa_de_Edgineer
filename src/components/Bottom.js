import React from 'react';
import Footer from '../styled-components/Footer.style'; 
import { Button, Divider } from 'antd';

function Bottom () {
    return (
        <Footer>
            <p>Interested in collaborating? Feel free to reach out! elopez42@ucla.edu</p>
            
            <Button
                type="normal" 
                size="large"
                icon="github" 
                shape="circle"
                href="https://github.com/Edgineer"
            >
            </Button>

            <Divider type="vertical" />
            
            <Button 
                type="normal" 
                size="large"
                icon="linkedin" 
                shape="circle"
                href="https://www.linkedin.com/in/elopez42"
            >
            </Button>
            
        </Footer>
    );
}
export default Bottom;