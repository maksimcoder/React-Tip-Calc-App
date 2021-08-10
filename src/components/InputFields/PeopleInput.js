import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { peopleInput, showTotal, showTip } from '../../actions';
import { InputLabel, InputWrapper, ImgWrapper, Input } from './PriceInput';
import logo from './icon-person.svg';


const ErrorText = styled(InputLabel)`
    float: right;
    color: rgb(224, 47, 47);
    display: ${props => props.show ? 'block' : 'none'};
`;


const PeopleInput = ({peopleInput, showTotal, showTip, people}) => {
    const [isShown, setShown] = useState(false);

    function handleChange(e) {
        const target = e.target.value;
        if (+target < 1 ) {
            setShown(true);
        } else {
            setShown(false);
        }
        
        peopleInput(target);
        showTotal();
        showTip();
    }

    return (
        <>
            <InputLabel> Number of People
                <ErrorText show={isShown}>Can't be zero!</ErrorText>
            </InputLabel>
            <InputWrapper>
                <ImgWrapper>
                    <img src={logo} alt="icon-dollar" />
                </ImgWrapper>
                <Input 
                    type="text" 
                    placeholder="0"
                    value={people}
                    onChange={handleChange} />
            </InputWrapper>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = {
    peopleInput,
    showTotal,
    showTip
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInput);