// components/ui/clearButton.tsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #e0b3ff; // Light purple color
  color: white;
  border: none;
  border-radius: 20px; // Pill shape
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d699ff; // Slightly darker shade for hover
  }
`;

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Clear
    </StyledButton>
  );
};

export default ClearButton;
