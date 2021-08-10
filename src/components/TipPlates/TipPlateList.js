import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tipInput, showTotal, showTip } from '../../actions';
import TipPlateItem from './TipPlateItem';




const PlateList = styled.ul`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 0;
    justify-content: center;
    margin-top: 15px;
`;

const CustomTipInput = styled.input`
    width: 95px;
    height: 35px;
    border: none;
    background: transparent;
    text-align: right;
    padding-right: 10px;
    font-size: 20px;
    outline: none;
    transition: .1s;
    border-radius: 2pt;

    &:focus {
        border-radius: 2pt;
    }
`;

const TipText = styled.span`
    cursor: default;
`;

const TipInput = ({handleChange, value}) => {

    return (
        <CustomTipInput 
            onChange={handleChange}
            value={value}
            placeholder="Custom"/>
    )
}


const TipPlateList = ({activeTipPlate, tipInput, showTotal, showTip, tip}) => {
    const [inputValue, setInputValue] = useState('');
    const dataArr = [5, 10, 15, 25, 50, <TipInput value={inputValue} handleChange={handleTipInput}/>];
    const elements = dataArr.map((item, i) => {

        const isActive = (activeTipPlate === i) ? true : false;

        return (
            <TipPlateItem 
            key={i}
            active={isActive}
            id={i}
            >{item} <span className="percent">%</span></TipPlateItem>
        )
    });

    function handleTipInput(e) {
        tipInput(e.target.value);
        setInputValue(e.target.value);
        showTotal();
        showTip();
    }
    
    return (
        <>
            <TipText>Select Tip %</TipText>
            <PlateList>
                {elements}
            </PlateList>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        activeTipPlate: state.activeTipPlate,
        tip: state.tip
    }
}

const mapDispatchToProps = {
    tipInput,
    showTotal,
    showTip
}


export default connect(mapStateToProps, mapDispatchToProps)(TipPlateList);




// <TipPlateItem > 5 <span className="percent">%</span></TipPlateItem>
//                 <TipPlateItem> 10 <span className="percent">%</span></TipPlateItem>
//                 <TipPlateItem active> 15 <span className="percent">%</span></TipPlateItem>
//                 <TipPlateItem> 25 <span className="percent">%</span></TipPlateItem>
//                 <TipPlateItem> 50 <span className="percent">%</span></TipPlateItem>
//                 <TipPlateItem >
//                     <CustomTipInput placeholder="Custom"/>
//                 </TipPlateItem>