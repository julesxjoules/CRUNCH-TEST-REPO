import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  background-color: #e0e0e0; // Light grey background
  border-radius: 25px; // Oval shape
  padding: 10px 15px;
  box-sizing: border-box;
`;

export const StyledInput = styled.input<{ isVisible?: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  flex-grow: 1;
  border: none; // Remove border
  background-color: transparent; // Match container background
  font-size: 16px;
  color: #333; // Ensure text color is visible
  outline: none; // Remove outline
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }
`;

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #999; // Match placeholder color
  margin-left: 10px;
  outline: none;
`;
