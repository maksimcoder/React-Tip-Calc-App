import React from 'react';
import styled from 'styled-components';

const ResetBtn = styled.button`
    outline: none;
    border: 1px solid transparent;
    min-width: 100%;
    height: 35px;
    border-radius: 5px;
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-family: 'Space Mono', monospace;;
    font-weight: 700;
    cursor: pointer;
    filter: ${props => props.active ? null : 'opacity(10%)'};
`;

const Btn = () => {
    return (
        <ResetBtn >RESET</ResetBtn>
    )
}

export default Btn;