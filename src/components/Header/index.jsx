import styled from "styled-components";
import Signature from "../Signature";


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
  color:  #524F51;
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
  color: #9F9C9C;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Container>
      <Title>Account Overview</Title>
      <ContactCard>
        <ContactCardTitle>Your Feefo Support Contact</ContactCardTitle>
        <Signature />
      </ContactCard>
    </Container>
  )
}

export default Header;