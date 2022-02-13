import styled from "styled-components";
import Signature from "../Signature";
import { textLightColor, textStrongColor } from "../UI/colors";


const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5em;
  align-items: center;
  margin-bottom: 2em;
`

const Title = styled.h2`
  font-size: 2em; 
  font-weight: 400;
  color: ${textStrongColor};
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContactCardTitle = styled.h3`
  font-size: 1em;
  text-align: start;
  margin-bottom: 0.5em;
  color: ${textLightColor};
  text-transform: uppercase;
`;

const Header = ({contact}) => {
  
  return (
    <Container>
      <Title>Account Overview</Title>
      <ContactCard>
        <ContactCardTitle>Your Feefo Support Contact</ContactCardTitle>
        <Signature data={contact} />
      </ContactCard>
    </Container>
  )
}

export default Header;