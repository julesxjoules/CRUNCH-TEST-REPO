"use client";

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Bubble from '@/components/ui/bubble';
import ClearButton from '@/components/ui/clearbutton';
import { StyledInput, InputContainer, ClearButton as ClearInputButton } from '@/components/ui/styleinput';
import PastTopicsDropdown from '@/components/ui/pasttopics';
import UserMenu from '@/components/ui/usermenu';
import Logo from '@/components/ui/logo';
import { TypingHeading } from '@/components/ui/styledheader';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeaderSection = styled.header`
  width: 100vw; /* Set to the full width of the viewport */
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 10;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 2vw;
  width: 100%;
  max-width: 100vw; /* Ensure content also stretches to full width */
  box-sizing: border-box;
  transition: padding 0.3s ease;

  @media (max-width: 768px) {
    padding: 2vh 4vw;
  }

  @media (max-width: 480px) {
    padding: 3vh 6vw;
  }
`;

const HeaderBodyDivider = styled.div`
  height: 2px;
  background-color: lightgrey;
  border-radius: 1px;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const LineGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Line = styled.div<{ thickness: number }>`
  width: 100px;
  height: ${({ thickness }) => thickness}px;
  background-color: grey;
`;

const SentenceGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Sentence = styled.div<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
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

  return (
    <OuterContainer>
      <HeaderSection>
        <HeaderContent>
          <LeftSection>
            <PastTopicsDropdown topics={pastTopics} />
          </LeftSection>
          <CenterSection>
            <Logo />
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
                  $isVisible={true} // Updated to use transient prop
                />
                {inputValue && <ClearInputButton onClick={handleClear}>✖</ClearInputButton>}
              </InputContainer>
              <Bubble text="This is a large bubble" style={{ width: '30vw', height: '30vw' }} />
              <ClearButton onClick={handleClear} />
            </MainBodyContainer>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <LineGroup>
                <Line thickness={2} />
                <Line thickness={4} />
                <Line thickness={6} />
              </LineGroup>
              <SentenceGroup>
                <Sentence fontSize={14}>This is a small sentence.</Sentence>
                <Sentence fontSize={18}>This is a medium sentence.</Sentence>
                <Sentence fontSize={22}>This is a large sentence.</Sentence>
              </SentenceGroup>
            </div>
          </MainContent>
        </ContentWrapper>
      </MainContainer>
    </OuterContainer>
  );
};

export default Home;
