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
  font-weight: bold; /* Set to bold for the "Past Topics" button */
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TriangleIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 13.86px solid black;
  margin-left: 8px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-out;
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
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 200px;
  border-radius: 10px;
  animation: ${({ $isOpen }) => ($isOpen ? appear : 'none')} 0.3s ease-out;
`;

const TopicItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 12px; /* Set to small size */
  font-weight: normal; /* Set to normal weight */
  &:hover {
    background-color: #f1f1f1;
  }
`;

interface PastTopicsDropdownProps {
  topics: string[];
}

const PastTopicsDropdown: React.FC<PastTopicsDropdownProps> = ({ topics }) => {
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
        Past Topics
        <TriangleIcon $isOpen={isOpen} />
      </DropdownButton>
      <DropdownContent $isOpen={isOpen}>
        {topics.length === 0 ? (
          <TopicItem>No past topics yet</TopicItem>
        ) : (
          topics.map((topic, index) => (
            <TopicItem key={index}>{topic}</TopicItem>
          ))
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default PastTopicsDropdown;
