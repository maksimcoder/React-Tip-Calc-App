import React from 'react';
import styled from 'styled-components';
import {PriceInput, PeopleInput} from '../InputFields/';
import TipPlateList from '../TipPlates';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
`;

const LeftSectionContainer = styled(Section)`
    margin-right: 25px;
`;

const Row = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

const LeftSectionRow = styled(Row)`
    display: flex;
    flex-direction: column;
`;



const LeftSection = () => {
    return (
        <LeftSectionContainer>
            <LeftSectionRow>
                <PriceInput/>
            </LeftSectionRow>
            <LeftSectionRow>
                <TipPlateList/>
            </LeftSectionRow>
            <LeftSectionRow>
                <PeopleInput/>
            </LeftSectionRow>
        </LeftSectionContainer>
    )
}

export {
    Section,
    Row
}

export default LeftSection;



