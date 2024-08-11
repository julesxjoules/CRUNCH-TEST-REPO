import styled from 'styled-components';

const buttongroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align buttons to the right */
  gap: 10px; /* Space between buttons */
`;

const CustomButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px; /* Pill-shaped */
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8; /* Add hover effect */
  }
`;

export { buttongroup, CustomButton };
