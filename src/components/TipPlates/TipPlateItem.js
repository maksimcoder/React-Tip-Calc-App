import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tipChosen, showTotal, showTip } from '../../actions';

const activeProperties = {
    background: 'hsl(172, 67%, 45%)',
    color: 'hsl(183, 100%, 15%)'
}

const TipPlate = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5px;
    background-color: ${props => props.active ? activeProperties.background : 'hsl(183, 100%, 15%)'};
    width: 95px;
    height: 35px;
    color: ${props => props.active ? activeProperties.color : 'white'};
    font-weight: 700;
    cursor: pointer;

    &:last-child {
        background-color: hsl(189, 41%, 97%);
    }

    & > .percent {
        font-weight: 500;
    }

    & > input + .percent {
        display: none;
    }

    &.active {
        color: hsl(183, 100%, 15%);
        background-color: hsl(172, 67%, 45%);
    }
`;



const TipPlateItem = ({active = false, id, tipChosen, showTotal, showTip, children}) => {


    function handleClick() {
        tipChosen(id, children[0]);
        showTotal();
        showTip();
    }
    
    return (
        <>
            <TipPlate
                active={active} 
                onClick={handleClick}>{children}</TipPlate>
        </>
    )
}


const mapDispatchToProps = {
    tipChosen,
    showTotal,
    showTip
}

export default connect(null, mapDispatchToProps)(TipPlateItem);