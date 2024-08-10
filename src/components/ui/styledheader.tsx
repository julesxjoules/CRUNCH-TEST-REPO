import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const TypingHeading = styled.h2<{ $isInput?: boolean, $showCursor?: boolean }>`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 2rem; /* Adjust this value to make the text larger */
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  border-right: ${({ $showCursor }) => ($showCursor ? '0.15em solid black' : 'none')};
  animation: ${typing} 2s steps(40, end);
  color: ${({ $isInput }) => ($isInput ? 'grey' : 'black')}; /* Conditional color based on input state */
  
  width: 100%; /* Make sure it occupies the full width */
  max-width: 100vw; /* Ensure it stretches across the viewport */
  margin: 0 auto; /* Center the heading */

  &::before {
    content: ${({ $isInput }) => ($isInput ? '"> "' : '""')}; /* Add ">" only for user input */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust this value for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Adjust this value for even smaller screens */
  }
`;
