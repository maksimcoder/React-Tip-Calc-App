import React from 'react';
import styled from 'styled-components';
import { LeftSection, RightSection } from '../sections';
import logo from './logo.svg';



const MainContainer = styled.main`
    position:absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #C5E4E6;
	align-items:center;
	align-content: center;
	min-width: 100%;
	min-height: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
	justify-content: center;
	background-color: white;
	padding: 20px 40px 20px 40px;
	border-radius: 15px;
	min-height: 55%;
	min-width: 60%;
`;

const LogoWrapper = styled.div`
	margin-bottom: 40px;
`;

const App = () => {
    return (
        <MainContainer>
			<LogoWrapper>
				<img src={logo} alt="logo" />
			</LogoWrapper>
            <ContentWrapper>
                <LeftSection/>
                <RightSection/>
            </ContentWrapper>
        </MainContainer>
    )
}

export default App;