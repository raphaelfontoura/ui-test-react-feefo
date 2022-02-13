import React from 'react';
import styled from 'styled-components';

import './account-overview.css';
import Card from './components/Card';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5em;
  width: 800px;
  background-color: #F4F4F4;
`;

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Card />
      </Container>
    </>
  )
}

export default AccountOverview;