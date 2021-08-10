import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TipCounterText = styled.span`
    line-height: 35px;
    color: white;
    position: relative;
    &::after {
        content: '/ person';
        white-space: pre;
        width: 20px;
        height: 20px;
        font-size: 12px;
        color: hsl(180, 17%, 50%);
        position: absolute;
        top: 30px;
        bottom: 0;
        right: 0;
        left: 0;
    }
`;

const TipCounter = styled.span`
    color: #25C0A8;
    font-size: 2.5rem;
`;

const TipAmount = () => {
    return (
        <CounterWrapper>
            <TipCounterText>Tip Amount</TipCounterText>
            <TipCounter>$4.27</TipCounter>
        </CounterWrapper>
    )
}

export {
    CounterWrapper,
    TipCounterText,
    TipCounter
}

export default TipAmount;