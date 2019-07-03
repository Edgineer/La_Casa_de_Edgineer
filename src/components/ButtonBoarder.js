import styled from 'styled-components';

//This creates a div object with this css and it gets returned. It is now styled

const ButtonBoarder = styled.td`
    text-align: ${props => (props.left ? props.left : props.right)};
    padding: 40px;
    font-family: Karla, Helvetica, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: white;
`;

export default ButtonBoarder;