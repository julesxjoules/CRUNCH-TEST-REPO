import styled, { keyframes } from 'styled-components';
import React from 'react';

const levitate = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BubbleContainer = styled.div`
  animation: ${levitate} 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%; /* Use a percentage of the container's width */
  max-width: 300px; /* Set a maximum width */
  height: 40%; /* Use a percentage of the container's height */
  max-height: 300px; /* Set a maximum height */
  border-radius: 50%;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BubbleText = styled.div`
  color: #333;
  font-size: 2em; /* Scale the text relative to the container */
  text-align: center;
  word-wrap: break-word; /* Ensure long text wraps within the bubble */
`;

interface BubbleProps {
  text: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ text, style }) => {
  return (
    <BubbleContainer style={style}>
      <BubbleText>{text}</BubbleText>
    </BubbleContainer>
  );
};

export default Bubble;
