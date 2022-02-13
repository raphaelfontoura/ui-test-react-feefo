
import React from 'react'
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { textLightColor, textStrongColor } from '../UI/colors';

const CardContainer = styled.div`
  /* box-shadow: 0 0 10px rgba(155, 155, 155, 0.2); */
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  height: 5em;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em;
`;

const CardHeaderInfo = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  color: #9F9C9C;

  strong {
    color: ${textStrongColor};
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #9F9F9F;
`;

const CardStatistics = styled.div`
  
  width: 50%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;

  .first {
    border-right: 1px solid grey;
  }

  h1 {
    font-size: 2em;
    color: green;
    font-weight: bold;
  }

  p {
    color: ${textLightColor};
    text-transform: uppercase;
  }

`;

const Card = ({ sales }) => {

  // console.log(sales);

  return (
    <CardContainer>

      <CardHeader>
        <CardHeaderInfo>
          <span>
            <FontAwesomeIcon icon={faUpload} color="#3EB1EB" />
            <strong> Sales </strong>
          </span>
          <FontAwesomeIcon icon={faInfoCircle} color="#9F9C9C" />
        </CardHeaderInfo>
        <CardHeaderInfo>
          <span>
            You had
            <strong> {sales.uploads} uploads </strong> 
            and <strong> {sales.linesAttempted} lines </strong> added.
          </span>
        </CardHeaderInfo>
      </CardHeader>

      <StatisticsContainer>

        <CardStatistics first>
          <h1>{sales.successfulUploads}%</h1>
          <p>upload success</p>
        </CardStatistics>

        <CardStatistics>
          <h1>{sales.linesSaved}%</h1>
          <p>lines saved</p>
        </CardStatistics>

      </StatisticsContainer>
    </CardContainer>
  )
}

export default Card