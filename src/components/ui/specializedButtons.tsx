// specializedButtons.tsx
import * as React from 'react';
import { BaseButton, ButtonProps } from './baseButton';

export const PinButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variant="orange" size="lg">
    Pin ?
  </BaseButton>
);

export const RefocusButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variant="default" size="sm">
    Refocus
  </BaseButton>
);

export const CustomNoteButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variant="purple" size="default">
    Custom note ?
  </BaseButton>
);

export const MorphButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variant="black" size="lg">
    Morph
  </BaseButton>
);

export const NextRoundButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variant="green" size="xl">
    Next round
  </BaseButton>
);

export const ClearButton: React.FC<ButtonProps> = (props) => (
  <BaseButton
    {...props}
    variant="clear"  // Light Purple color
    size="lg"
    style={{ borderRadius: '20px', marginTop: '20px' }} // Applying the custom styles
    onClick={props.onClick}
  >
    Clear
  </BaseButton>
);
