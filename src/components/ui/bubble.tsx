import styled, { keyframes } from 'styled-components';
import React from 'react';

const levitate = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BubbleContainer = styled.div<{ $style?: React.CSSProperties }>`
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
  ${({ $style }) => $style && { ...$style }}; /* Apply transient style prop */
`;

interface BubbleProps {
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ style }) => {
  return (
    <BubbleContainer $style={style} />
  );
};

export default Bubble;
