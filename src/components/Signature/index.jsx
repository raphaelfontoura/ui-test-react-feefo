import styled from "styled-components";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactData = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

const ContactSignature = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
`;

const SignData = styled.div`
  display: flex;
  justify-content: space-between;
  color: #9F9C9C;
  span {
    margin-right: 1em;
  }
`;

const NameSign = styled.h4`
  text-align: start;
  text-transform: capitalize;
  margin-bottom: 0.3em;
  color: #524F51;
`;

const PersonalIcon = styled.div`
  display: inline-flex;
  width: 3em;
  height: 3em;
  font-size: 1em;
  font-weight: 700;
  background-color: #F9CF02;
  text-transform: capitalize;
  color: #524F51;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  margin-right: 1em;
`;

const Signature = () => {

  return (
    <ContactData>
      <PersonalIcon>S</PersonalIcon>
      <ContactSignature>
        <NameSign>Support</NameSign>
        <SignData>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> support@feefo.com
          </span>
          <span>020 3362 4208</span>
        </SignData>
      </ContactSignature>

    </ContactData>
  )
};

export default Signature;