import styled from 'styled-components';

const LogoContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 24px; // Medium font size
  text-align: center;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    font-size: 18px; // Adjust font size for smaller screens
    &::after {
      content: "BC";
    }
  }

  @media (min-width: 601px) {
    &::after {
      content: "Book Crunch";
    }
  }
`;

const Logo: React.FC = () => {
  return <LogoContainer />;
};

export default Logo;
