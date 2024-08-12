"use client";

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Bubble from '@/components/ui/bubble';
import { ClearButton } from '@/components/ui/specializedButtons'; // Updated ClearButton import
import { StyledInput, InputContainer, ClearButton as ClearInputButton } from '@/components/ui/styleinput';
import PastTopicsDropdown from '@/components/ui/pasttopics';
import UserMenu from '@/components/ui/usermenu';
import Logo from '@/components/ui/logo';
import { TypingHeading } from '@/components/ui/styledheader';
import { CustomButtonGroup } from '@/components/ui/ButtonGroup'; // Use the correct case

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeaderSection = styled.header`
  width: 100vw;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  box-sizing: border-box;
  padding: 1rem 0;
  height: auto;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
  padding: 1vh 2vw;
  box-sizing: border-box;
  transition: padding 0.3s ease;
  position: relative;
  @media (max-width: 768px) {
    padding: 2vh 4vw;
  }

  @media (max-width: 480px) {
    padding: 3vh 6vw;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderBodyDivider = styled.div`
  height: 2px;
  background-color: lightgrey;
  border-radius: 1px;
  width: calc(100% - 35px);
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 17.5px;
  right: 17.5px;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;
`;

const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1rem;
`;

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('What do you want to learn today?');
  const [pastTopics, setPastTopics] = useState<string[]>([]);
  const [userOptions] = useState<string[]>(['Profile', 'Settings', 'Logout']);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      setPastTopics([...pastTopics, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleLogoClick = () => {
    setPastTopics([]); // Clear past topics
    window.location.reload(); // Refresh the page
  };

  return (
    <OuterContainer>
      <HeaderSection>
        <HeaderContent>
          <LeftSection>
            <PastTopicsDropdown topics={pastTopics} />
          </LeftSection>
          <CenterSection>
            <Logo/>
          </CenterSection>
          <RightSection>
            <UserMenu options={userOptions} />
          </RightSection>
        </HeaderContent>
        <HeaderBodyDivider />
      </HeaderSection>
      <MainContainer>
        <ContentWrapper>
          <MainContent>
            <MainBodyContainer>
              <TypingHeading>{displayText}</TypingHeading>
              <InputContainer>
                <StyledInput
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputSubmit}
                  placeholder="Enter a topic"
                  $isVisible={true}
                />
                {inputValue && <ClearInputButton onClick={handleClear}>✖</ClearInputButton>}
              </InputContainer>

              <Bubble style={{ width: '30vw', height: '30vw' }} />

              <ClearButton onClick={handleClear} />
            </MainBodyContainer>
            
            {/* Integrated Button Group to the right */}
            <CustomButtonGroup />
          </MainContent>
        </ContentWrapper>
      </MainContainer>
    </OuterContainer>
  );
};

export default Home;
