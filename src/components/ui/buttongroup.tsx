// buttonGroup.tsx
import styled from 'styled-components';
import { PinButton, RefocusButton, CustomNoteButton, MorphButton, NextRoundButton } from './specializedButtons'; // Ensure the path is correct

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const CustomButtonGroup = () => (
  <ButtonGroup>
    <PinButton />
    <RefocusButton />
    <CustomNoteButton />
    <MorphButton />
    <NextRoundButton />
  </ButtonGroup>
);
