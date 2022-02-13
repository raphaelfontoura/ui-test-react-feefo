
import React from 'react'
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const CardContainer = styled.div`
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
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
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #9F9C9C;
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
    color: #9F9C9C;
    text-transform: uppercase;
  }

`;

const Card = () => {
  return (
    <CardContainer>

      <CardHeader>
        <CardHeaderInfo>
          <span>
            <FontAwesomeIcon icon={faUpload} color="#3EB1EB" /> Sales
          </span>
          <FontAwesomeIcon icon={faInfoCircle} color="#9F9C9C" />
        </CardHeaderInfo>
        <CardHeaderInfo>
          <span>You had 0 uploads and 0 lines added.</span>
        </CardHeaderInfo>
      </CardHeader>

      <StatisticsContainer>

        <CardStatistics className='first'>
          <h1>0%</h1>
          <p>upload success</p>
        </CardStatistics>

        <CardStatistics>
          <h1>0%</h1>
          <p>lines saved</p>
        </CardStatistics>

      </StatisticsContainer>
    </CardContainer>
  )
}

export default Card