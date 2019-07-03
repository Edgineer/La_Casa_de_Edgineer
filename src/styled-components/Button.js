import styled from 'styled-components';

//This creates a div object with this css and it gets returned. It is now styled

const Button = styled.button`
    font-family: Karla, Helvetica, sans-serif;
    font-weight: 700;


    background-color: transparent;
    font-size: 24px;
    border-radius: 21px;
    padding: 32px 16px;
    color: white;
    text-align: center;
    display: inline-block;
    &:hover {
    background-color: rgb(255,255,255,0.9);
    color: black;
    }
`;

export default Button;