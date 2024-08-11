import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  font-family: 'Inter', sans-serif;
  z-index: 2;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: bold; /* Set to bold for the "User" button */
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) { /* Adjust the width as needed */
    font-size: 0; /* Hide the text by making the font size 0 */
  }
`;

const ProfileCircle = styled.div`
  display: none; /* Hidden by default */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey; /* Placeholder color */
  
  @media (max-width: 768px) { /* Show the circle when the screen width is below a certain threshold */
    display: inline-block;
    margin-left: 8px;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownContent = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 200px;
  border-radius: 10px;
  animation: ${({ $isOpen }) => ($isOpen ? appear : 'none')} 0.3s ease-out;
  overflow: hidden;
`;

const OptionItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 12px; /* Keep small size for dropdown items */
  font-weight: normal; /* Keep normal weight for dropdown items */
  &:hover {
    background-color: #f1f1f1;
  }
`;

interface UserMenuProps {
  options: string[];
}

const UserMenu: React.FC<UserMenuProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        User
        <ProfileCircle /> {/* Circle that shows up when zoomed in */}
      </DropdownButton>
      <DropdownContent $isOpen={isOpen}>
        {options.map((option, index) => (
          <OptionItem key={index}>{option}</OptionItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default UserMenu;
