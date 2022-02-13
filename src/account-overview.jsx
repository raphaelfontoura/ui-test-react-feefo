import './account-overview.css';

import React from 'react';
import styled from 'styled-components';

import Card from './components/Card';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import { backColor } from './components/UI/colors';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5em;
  width: 820px;
  background-color: ${backColor};
`;

export const AccountOverview = ({ data }) => {
  // console.log(data);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header contact={data.supportContact} />
        <Card sales={data.salesOverview} />
      </Container>
    </>
  )
}

export default AccountOverview;