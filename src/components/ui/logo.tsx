import styled from 'styled-components';

const LogoContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 24px; // Medium font size
  text-align: center;
  margin: 0;
  padding: 0;
  cursor: pointer; // Make the logo appear clickable

  @media (max-width: 600px) {
    display: none; // Hide the logo when the screen width is 600px or less
  }

  @media (min-width: 601px) {
    &::after {
      content: "Book Crunch";
    }
  }
`;

const Logo: React.FC = () => {
  const handleLogoClick = () => {
    localStorage.removeItem('pastTopics'); // Clear the past topics from local storage
    window.location.reload(); // Refresh the page
  };

  return <LogoContainer onClick={handleLogoClick} />;
};

export default Logo;
