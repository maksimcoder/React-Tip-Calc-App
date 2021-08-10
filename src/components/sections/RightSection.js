import React from 'react';
import styled from 'styled-components';
import { Section, Row } from './LeftSection';
import { TotalAmount, TipAmount } from '../Counters';
import Btn from '../ButtonCTA';

const RightSectionContainer = styled(Section)`
    background-color: hsl(183, 100%, 15%);
    font-weight: 700;
	border-radius: 20px;
	margin-left: 25px;
	cursor: default;
`;
const RightSectionRow = styled(Row)`
    padding: 25px;

    &:last-child {
        display: flex;
		justify-content: center;
    }
`;



const RightSection = () => {
    return (
        <RightSectionContainer>
            <RightSectionRow>
                <TipAmount/>
            </RightSectionRow>
            <RightSectionRow>
                <TotalAmount/>
            </RightSectionRow>
            <RightSectionRow>
                <Btn/>
            </RightSectionRow>
        </RightSectionContainer>
    )
}

export default RightSection;