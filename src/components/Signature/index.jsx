import styled from "styled-components";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconColor, textLightColor, textStrongColor } from '../UI/colors'

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
  color: ${textLightColor};
  span {
    margin-right: 1em;
  }
`;

const NameSign = styled.h4`
  text-align: start;
  text-transform: capitalize;
  margin-bottom: 0.3em;
  color: ${textStrongColor};
`;

const PersonalIcon = styled.div`
  display: inline-flex;
  width: 3em;
  height: 3em;
  font-size: 1em;
  font-weight: 700;
  background-color: ${iconColor};
  text-transform: capitalize;
  color: ${textStrongColor};
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  margin-right: 1em;
`;

const Signature = ({data}) => {
  
  return (
    <ContactData>
      <PersonalIcon>{data.name[0]}</PersonalIcon>
      <ContactSignature>
        <NameSign>{data.name}</NameSign>
        <SignData>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> {data.email}
          </span>
          <span>020 3362 4208</span>
        </SignData>
      </ContactSignature>

    </ContactData>
  )
};

export default Signature;