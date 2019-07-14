import styled from 'styled-components';

const HeaderStyle = styled.button`
    background: url(${props => props.homeicon});
    border:none;
    height: 32px;
    width: 32px;
    cursor: pointer;
    padding: 30px;
`;

export default HeaderStyle;