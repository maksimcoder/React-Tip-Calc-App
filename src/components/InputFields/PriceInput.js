import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { billInput, showTotal, showTip } from '../../actions';
import logo from './icon-dollar.svg';



const InputLabel = styled.span`
    cursor: default;
`;

const InputWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    align-content: center;
    margin-top: 10px;
`;

const ImgWrapper = styled.div`
    display: flex;
    position: absolute;
    left: 10px;
`;

const Input = styled.input`
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 7px 15px 7px 7px;
    background-color: hsl(189, 41%, 97%);
    width: 100%;
    font-size: 24px;
    text-align: right;
    ::placeholder {
        font-family: 'Space Mono', monospace;
    }
`; 


const PriceInput = ({billInput, showTotal, showTip, bill}) => {
    function handleChange(e) {
        billInput(e.target.value);
        showTotal();
        showTip();
    }

    return (
        <>
            <InputLabel>Bill</InputLabel>
            <InputWrapper>
                <ImgWrapper>
                    <img src={logo} alt="icon-dollar" />
                </ImgWrapper>
                <Input 
                    type="text" 
                    placeholder="0"
                    value={bill}
                    onChange={handleChange}/>
            </InputWrapper>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        bill: state.bill
    }
}

const mapDispatchToProps = {
    billInput,
    showTotal,
    showTip
}

export {
    InputLabel,
    InputWrapper,
    ImgWrapper,
    Input
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceInput);