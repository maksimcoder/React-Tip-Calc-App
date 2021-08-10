import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { CounterWrapper, TipCounterText, TipCounter } from './TipAmount';



const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TotalCounterText = styled.span`
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

const TotalCounter = styled.span`
    color: #25C0A8;
    font-size: 2.5rem;
`;

const TotalAmount = ({total}) => {
    return (
        <CounterWrapper>
            <TotalCounterText>Total</TotalCounterText>
            <TotalCounter>${total}</TotalCounter>
        </CounterWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(TotalAmount);
