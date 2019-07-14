import styled from 'styled-components';

//This creates a div object with this css and it gets returned. It is now styled

const Wrapper = styled.body`
    background-image: url(${props => props.background});
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
`;

export default Wrapper;