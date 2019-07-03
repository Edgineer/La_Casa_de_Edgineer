import styled from 'styled-components';
import stadium from '../images/stadium.png';

//This creates a div object with this css and it gets returned. It is now styled

const Wrapper = styled.body`
    background-image: url(${stadium});
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
`;

export default Wrapper;