import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { peopleInput } from '../../actions';
import { InputLabel, InputWrapper, ImgWrapper, Input } from './PriceInput';
import logo from './icon-person.svg';


const ErrorText = styled(InputLabel)`
    float: right;
    color: rgb(224, 47, 47);
    display: ${props => props.show ? 'block' : 'none'};
`;


const PeopleInput = ({peopleInput, people}) => {
    function handleChange(e) {
        peopleInput(e.target.value);
    }

    return (
        <>
            <InputLabel> Number of People
                <ErrorText >Can't be zero!</ErrorText>
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
    peopleInput
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInput);